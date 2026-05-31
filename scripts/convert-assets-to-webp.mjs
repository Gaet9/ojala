/**
 * Optimise les images de src/assets : redimensionnement + WebP (sharp).
 *
 * Grille (navigateur) : variante *-sm.webp max 800 px (côté long).
 * Lightbox : max 1920 px (côté le plus long), ratio conservé.
 * Couverture (nom contenant "Couverture") : max 800 px de large.
 *
 * Usage:
 *   node scripts/convert-assets-to-webp.mjs
 *   node scripts/convert-assets-to-webp.mjs --webp-only --force --staging
 *   node scripts/convert-assets-to-webp.mjs --apply-staging
 *   node scripts/convert-assets-to-webp.mjs --delete-originals
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ASSETS_DIR = path.join(ROOT, "src", "assets");
/** Copie miroir : évite EPERM/EBUSY quand Vite/Cursor verrouille src/assets */
const STAGING_DIR = path.join(ROOT, "src", "assets-optimized");

const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const WEBP_EXTENSION = ".webp";

const DEFAULT_QUALITY = 80;
/** Lightbox (retina ~2×, max-w-4xl) */
const DEFAULT_GALLERY_MAX = 1920;
/** Vignettes galerie (tuiles ~400–580 px affiché × 2) */
const DEFAULT_GALLERY_THUMB_MAX = 960;
const THUMB_SUFFIX = "-sm";
/** Hero : w-80 ≈ 320 px → 800 px en 2×+ marge */
const DEFAULT_COVER_MAX_WIDTH = 800;
const COVER_NAME_PATTERN = /couverture/i;

function parseArgs() {
    const args = process.argv.slice(2);
    let quality = DEFAULT_QUALITY;
    let deleteOriginals = false;
    let webpOnly = false;
    let force = false;
    let galleryMax = DEFAULT_GALLERY_MAX;
    let galleryThumbMax = DEFAULT_GALLERY_THUMB_MAX;
    let coverMaxWidth = DEFAULT_COVER_MAX_WIDTH;
    let staging = false;
    let applyStaging = false;

    for (const arg of args) {
        if (arg.startsWith("--quality=")) {
            quality = Math.min(100, Math.max(1, parseInt(arg.split("=")[1], 10) || DEFAULT_QUALITY));
        } else if (arg.startsWith("--gallery-max=")) {
            galleryMax = Math.max(1, parseInt(arg.split("=")[1], 10) || DEFAULT_GALLERY_MAX);
        } else if (arg.startsWith("--thumb-max=")) {
            galleryThumbMax = Math.max(1, parseInt(arg.split("=")[1], 10) || DEFAULT_GALLERY_THUMB_MAX);
        } else if (arg.startsWith("--cover-max=")) {
            coverMaxWidth = Math.max(1, parseInt(arg.split("=")[1], 10) || DEFAULT_COVER_MAX_WIDTH);
        } else if (arg === "--delete-originals") {
            deleteOriginals = true;
        } else if (arg === "--webp-only") {
            webpOnly = true;
        } else if (arg === "--force") {
            force = true;
        } else if (arg === "--staging") {
            staging = true;
        } else if (arg === "--apply-staging") {
            applyStaging = true;
        } else if (arg === "--help" || arg === "-h") {
            console.log(`
Usage: node scripts/convert-assets-to-webp.mjs [options]

Redimensionne puis encode en WebP (ou ré-optimise des .webp existants).

Options:
  --quality=N           Qualité WebP (1-100, défaut: ${DEFAULT_QUALITY})
  --gallery-max=N       Côté max lightbox (défaut: ${DEFAULT_GALLERY_MAX})
  --thumb-max=N         Côté max vignettes *-sm.webp (défaut: ${DEFAULT_GALLERY_THUMB_MAX})
  --cover-max=N         Largeur max couverture (défaut: ${DEFAULT_COVER_MAX_WIDTH})
  --webp-only           Traite uniquement les .webp (écrase avec --force)
  --force               Réécrit les .webp même s'ils existent déjà
  --staging             Écrit dans src/assets-optimized/ (recommandé sous Windows)
  --apply-staging       Copie assets-optimized → src/assets (arrêter npm run dev avant)
  --delete-originals    Supprime jpg/png après conversion (sans --webp-only)
  -h, --help            Affiche cette aide

Workflow Windows :
  npm run optimize:images
  npm run optimize:images:apply
`);
            process.exit(0);
        }
    }

    return { quality, deleteOriginals, webpOnly, force, galleryMax, galleryThumbMax, coverMaxWidth, staging, applyStaging };
}

function isThumbVariant(filePath) {
    return path.basename(filePath).includes(`${THUMB_SUFFIX}.webp`);
}

function getThumbOutputPath(webpPath) {
    return webpPath.slice(0, -WEBP_EXTENSION.length) + `${THUMB_SUFFIX}${WEBP_EXTENSION}`;
}

function getThumbResizeOptions(galleryThumbMax) {
    return {
        width: galleryThumbMax,
        height: galleryThumbMax,
        fit: "inside",
        withoutEnlargement: true,
    };
}

function formatBytes(bytes) {
    if (bytes === 0) return "0 o";
    const units = ["o", "Ko", "Mo", "Go"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const value = bytes / 1024 ** i;
    return `${value.toFixed(i === 0 ? 0 : 2)} ${units[i]}`;
}

function isCoverImage(filePath) {
    return COVER_NAME_PATTERN.test(path.basename(filePath));
}

function getResizeOptions(filePath, galleryMax, coverMaxWidth) {
    if (isCoverImage(filePath)) {
        return { width: coverMaxWidth, withoutEnlargement: true };
    }
    return {
        width: galleryMax,
        height: galleryMax,
        fit: "inside",
        withoutEnlargement: true,
    };
}

async function cleanupOrphanTmpFiles(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    let removed = 0;
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            removed += await cleanupOrphanTmpFiles(fullPath);
        } else if (entry.isFile() && (entry.name.endsWith(".webp.tmp") || entry.name.endsWith(".webp.new"))) {
            await fs.unlink(fullPath);
            removed++;
        }
    }
    return removed;
}

async function collectFiles(dir, webpOnly, files = []) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await collectFiles(fullPath, webpOnly, files);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (webpOnly && ext === WEBP_EXTENSION && !isThumbVariant(fullPath)) {
                files.push(fullPath);
            } else if (!webpOnly && SOURCE_EXTENSIONS.has(ext)) {
                files.push(fullPath);
            }
        }
    }

    return files;
}

async function getImageDimensions(filePath) {
    const meta = await sharp(filePath).metadata();
    return { width: meta.width ?? 0, height: meta.height ?? 0 };
}

async function writeWebpOutput(targetPath, buffer, retries = 5) {
    const sidecar = `${targetPath}.new`;
    await fs.writeFile(sidecar, buffer);

    let lastError;
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            await fs.copyFile(sidecar, targetPath);
            await fs.unlink(sidecar).catch(() => {});
            return;
        } catch (err) {
            lastError = err;
            if (attempt < retries - 1 && (err.code === "EPERM" || err.code === "EBUSY" || err.code === "UNKNOWN")) {
                await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
                continue;
            }
        }
    }

    await fs.unlink(sidecar).catch(() => {});
    throw lastError;
}

/** Lit d'abord en mémoire pour pouvoir réécrire le même fichier (évite verrouillage lecture/écriture). */
async function encodeToWebpBuffer(inputPath, galleryMax, coverMaxWidth, quality, inputBuffer = null) {
    const resize = getResizeOptions(inputPath, galleryMax, coverMaxWidth);
    const source = inputBuffer ?? (await fs.readFile(inputPath));
    return sharp(source).resize(resize).webp({ quality }).toBuffer();
}

function buildSharpPipeline(inputPath, galleryMax, coverMaxWidth, quality) {
    const resize = getResizeOptions(inputPath, galleryMax, coverMaxWidth);
    return sharp(inputPath).resize(resize).webp({ quality });
}

async function encodeThumbWebpBuffer(inputPath, inputBuffer, galleryThumbMax, quality) {
    const resize = getThumbResizeOptions(galleryThumbMax);
    return sharp(inputBuffer).resize(resize).webp({ quality }).toBuffer();
}

async function writeGalleryThumb(filePath, inputBuffer, options) {
    if (isCoverImage(filePath) || isThumbVariant(filePath)) {
        return null;
    }

    const { quality, galleryThumbMax, staging } = options;
    let thumbPath = getThumbOutputPath(filePath);
    if (staging) {
        const rel = path.relative(ASSETS_DIR, thumbPath);
        thumbPath = path.join(STAGING_DIR, rel);
        await fs.mkdir(path.dirname(thumbPath), { recursive: true });
    }

    const buffer = await encodeThumbWebpBuffer(filePath, inputBuffer, galleryThumbMax, quality);
    await fs.writeFile(thumbPath, buffer);
    return thumbPath;
}

async function processSourceFile(filePath, options) {
    const { quality, deleteOriginals, force, galleryMax, coverMaxWidth } = options;
    const inputBuffer = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    const webpPath = filePath.slice(0, -ext.length) + WEBP_EXTENSION;

    const originalStat = await fs.stat(filePath);
    const originalSize = originalStat.size;
    const dimsBefore = await getImageDimensions(filePath);

    const existingWebp = await fs.stat(webpPath).catch(() => null);
    if (existingWebp && force) {
        const buffer = await encodeToWebpBuffer(filePath, galleryMax, coverMaxWidth, quality, inputBuffer);
        await writeWebpOutput(webpPath, buffer);
        await writeGalleryThumb(filePath, inputBuffer, options);
        const webpStat = await fs.stat(webpPath);
        const dimsAfter = await getImageDimensions(webpPath);
        let deleted = false;
        if (deleteOriginals) {
            await fs.unlink(filePath);
            deleted = true;
        }
        return {
            filePath,
            outputPath: webpPath,
            originalSize,
            outputSize: webpStat.size,
            skipped: false,
            deleted,
            dimsBefore,
            dimsAfter,
            isCover: isCoverImage(filePath),
        };
    }

    if (existingWebp && !force) {
        return {
            filePath,
            outputPath: webpPath,
            originalSize,
            outputSize: existingWebp.size,
            skipped: true,
            deleted: false,
            dimsBefore,
            dimsAfter: await getImageDimensions(webpPath).catch(() => dimsBefore),
            isCover: isCoverImage(filePath),
        };
    }

    await buildSharpPipeline(filePath, galleryMax, coverMaxWidth, quality).toFile(webpPath);
    await writeGalleryThumb(filePath, inputBuffer, options);

    const webpStat = await fs.stat(webpPath);
    const dimsAfter = await getImageDimensions(webpPath);

    let deleted = false;
    if (deleteOriginals) {
        await fs.unlink(filePath);
        deleted = true;
    }

    return {
        filePath,
        outputPath: webpPath,
        originalSize,
        outputSize: webpStat.size,
        skipped: false,
        deleted,
        dimsBefore,
        dimsAfter,
        isCover: isCoverImage(filePath),
    };
}

async function processWebpInPlace(filePath, options) {
    const { quality, galleryMax, coverMaxWidth, staging } = options;
    const originalStat = await fs.stat(filePath);
    const originalSize = originalStat.size;
    const dimsBefore = await getImageDimensions(filePath);

    const inputBuffer = await fs.readFile(filePath);
    const outputBuffer = await encodeToWebpBuffer(filePath, galleryMax, coverMaxWidth, quality, inputBuffer);

    let outputPath = filePath;
    if (staging) {
        const rel = path.relative(ASSETS_DIR, filePath);
        outputPath = path.join(STAGING_DIR, rel);
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        await fs.writeFile(outputPath, outputBuffer);
    } else {
        await writeWebpOutput(filePath, outputBuffer);
    }

    await writeGalleryThumb(filePath, inputBuffer, options);

    const outputStat = await fs.stat(outputPath);
    const dimsAfter = await getImageDimensions(outputPath);

    return {
        filePath,
        outputPath,
        originalSize,
        outputSize: outputStat.size,
        skipped: false,
        deleted: false,
        dimsBefore,
        dimsAfter,
        isCover: isCoverImage(filePath),
    };
}

async function collectStagingWebpFiles(dir, baseDir, files = []) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            await collectStagingWebpFiles(fullPath, baseDir, files);
        } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === WEBP_EXTENSION) {
            files.push({ stagingPath: fullPath, targetPath: path.join(ASSETS_DIR, path.relative(baseDir, fullPath)) });
        }
    }
    return files;
}

async function runApplyStaging() {
    console.log(`\nApplication du staging — ${STAGING_DIR} → ${ASSETS_DIR}\n`);

    const stagingExists = await fs.stat(STAGING_DIR).catch(() => null);
    if (!stagingExists) {
        console.error(`Dossier introuvable : ${STAGING_DIR}`);
        console.error("Lancez d'abord : npm run optimize:images\n");
        process.exit(1);
    }

    const pairs = await collectStagingWebpFiles(STAGING_DIR, STAGING_DIR);
    if (pairs.length === 0) {
        console.log("Aucun .webp dans assets-optimized.");
        process.exit(0);
    }

    let applied = 0;
    let errors = 0;

    for (const { stagingPath, targetPath } of pairs) {
        const relative = path.relative(ROOT, targetPath);
        try {
            await fs.mkdir(path.dirname(targetPath), { recursive: true });
            await fs.copyFile(stagingPath, targetPath);
            applied++;
            console.log(`  ✓ ${relative}`);
        } catch (err) {
            errors++;
            console.error(`  ✗ ${relative}: ${err.message}`);
        }
    }

    console.log(`\n${applied} fichier(s) copié(s).`);
    if (errors > 0) {
        console.log("Arrêtez `npm run dev` et les onglets sur Photos, puis relancez npm run optimize:images:apply\n");
        process.exit(1);
    }
    console.log("");
}

async function main() {
    const options = parseArgs();
    const { quality, deleteOriginals, webpOnly, force, galleryMax, galleryThumbMax, coverMaxWidth, staging, applyStaging } =
        options;

    if (applyStaging) {
        await runApplyStaging();
        return;
    }

    console.log(`\nOptimisation images — ${ASSETS_DIR}`);
    console.log(`Mode: ${webpOnly ? "WebP uniquement (ré-écriture)" : "jpg/png → WebP"}`);
    if (staging) console.log(`Sortie: ${STAGING_DIR} (puis npm run optimize:images:apply)`);
    console.log(`Qualité WebP: ${quality}`);
    console.log(`Lightbox: max ${galleryMax} px (côté long, fit inside)`);
    console.log(`Vignettes galerie (*-sm.webp): max ${galleryThumbMax} px`);
    console.log(`Couverture (*Couverture*): max ${coverMaxWidth} px de large`);
    if (force) console.log(`Force: oui`);
    if (deleteOriginals && !webpOnly) console.log(`Suppression des originaux: oui`);
    console.log();

    const tmpCleaned = await cleanupOrphanTmpFiles(ASSETS_DIR);
    if (tmpCleaned > 0) {
        console.log(`${tmpCleaned} fichier(s) .webp.tmp orphelin(s) supprimé(s).\n`);
    }

    const files = await collectFiles(ASSETS_DIR, webpOnly);

    if (files.length === 0) {
        const hint = webpOnly ? "webp" : "jpg/jpeg/png";
        console.log(`Aucune image ${hint} trouvée dans src/assets.`);
        process.exit(0);
    }

    console.log(`${files.length} fichier(s) à traiter...\n`);

    let totalBefore = 0;
    let totalAfter = 0;
    let processed = 0;
    let skipped = 0;
    let errors = 0;
    let coverCount = 0;
    let galleryCount = 0;

    for (const filePath of files) {
        const relative = path.relative(ROOT, filePath);
        try {
            const result = webpOnly
                ? await processWebpInPlace(filePath, options)
                : await processSourceFile(filePath, options);

            totalBefore += result.originalSize;
            totalAfter += result.outputSize;

            if (result.isCover) coverCount++;
            else galleryCount++;

            const dimLabel =
                result.dimsBefore.width && result.dimsAfter.width
                    ? ` ${result.dimsBefore.width}×${result.dimsBefore.height} → ${result.dimsAfter.width}×${result.dimsAfter.height}`
                    : "";

            if (result.skipped) {
                skipped++;
                console.log(`  ⊘ ${relative} (webp déjà présent, utilisez --force)`);
            } else {
                processed++;
                const saved = result.originalSize - result.outputSize;
                const pct = result.originalSize > 0 ? ((saved / result.originalSize) * 100).toFixed(1) : "0";
                const tag = result.isCover ? "[couverture]" : "[galerie]";
                console.log(
                    `  ✓ ${relative} ${tag}${dimLabel}\n      ${formatBytes(result.originalSize)} → ${formatBytes(result.outputSize)} (−${pct}%)`
                );
            }
        } catch (err) {
            errors++;
            console.error(`  ✗ ${relative}: ${err.message}`);
        }
    }

    const savedBytes = totalBefore - totalAfter;
    const savedPct = totalBefore > 0 ? ((savedBytes / totalBefore) * 100).toFixed(1) : "0";

    console.log("\n" + "═".repeat(52));
    console.log("RÉSULTAT — Gain de mémoire");
    console.log("═".repeat(52));
    console.log(`  Fichiers traités      : ${files.length}`);
    console.log(`  Optimisés             : ${processed}`);
    console.log(`  Ignorés               : ${skipped}`);
    if (errors > 0) console.log(`  Erreurs               : ${errors}`);
    console.log(`  Galerie / lightbox    : ${galleryCount} (lightbox ${galleryMax}px, vignettes ${galleryThumbMax}px)`);
    console.log(`  Couverture            : ${coverCount} (max ${coverMaxWidth}px large)`);
    console.log(`  Taille avant          : ${formatBytes(totalBefore)}`);
    console.log(`  Taille après          : ${formatBytes(totalAfter)}`);
    console.log(`  Économie totale       : ${formatBytes(savedBytes)} (−${savedPct}%)`);
    console.log("═".repeat(52) + "\n");

    if (errors > 0) {
        console.log(
            "Conseil : relancez avec --staging (déjà le défaut via npm run optimize:images), puis npm run optimize:images:apply après avoir arrêté le serveur de dev.\n"
        );
        process.exit(1);
    }

    if (staging) {
        console.log(`Fichiers prêts dans src/assets-optimized/`);
        console.log(`Étape suivante : arrêtez npm run dev, puis : npm run optimize:images:apply\n`);
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
