import type { IndexHtmlTransformContext, Plugin } from "vite";

/** Rend les CSS non bloquants et précharge l'image LCP (couverture). */
export function performanceHtmlPlugin(): Plugin {
    return {
        name: "performance-html",
        apply: "build",
        transformIndexHtml: {
            order: "post",
            handler(html, ctx: IndexHtmlTransformContext) {
                const preloads: string[] = [];

                const coverAsset = Object.keys(ctx.bundle ?? {}).find(
                    (file) => file.includes("Couverture2") && file.endsWith(".webp"),
                );
                if (coverAsset) {
                    preloads.push(
                        `<link rel="preload" as="image" type="image/webp" href="/${coverAsset}" fetchpriority="high" />`,
                    );
                }

                const fontsAsset = Object.keys(ctx.bundle ?? {}).find(
                    (file) => file.includes("fonts") && file.endsWith(".css"),
                );
                if (fontsAsset) {
                    preloads.push(
                        `<link rel="preload" href="/${fontsAsset}" as="style" onload="this.onload=null;this.rel='stylesheet'" />\n      <noscript><link rel="stylesheet" href="/${fontsAsset}"></noscript>`,
                    );
                }

                // Le CSS principal reste bloquant pour éviter FOUC (boutons, thème, fond).

                if (preloads.length > 0) {
                    html = html.replace("</head>", `      ${preloads.join("\n      ")}\n    </head>`);
                }

                return html;
            },
        },
    };
}
