import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./locales/fr";

export const SUPPORTED_LANGUAGES = ["en", "es", "fr"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const LOCALE_LOADERS: Record<Exclude<SupportedLanguage, "fr">, () => Promise<{ default: Record<string, unknown> }>> = {
    en: () => import("./locales/en"),
    es: () => import("./locales/es"),
};

function detectLanguage(): SupportedLanguage {
    try {
        const stored = localStorage.getItem("i18nextLng");
        if (stored?.startsWith("fr")) return "fr";
        if (stored?.startsWith("es")) return "es";
        if (stored?.startsWith("en")) return "en";
    } catch {
        // localStorage unavailable (SSR, privacy mode)
    }

    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === "fr" || browserLang === "es" || browserLang === "en") {
        return browserLang;
    }

    return "fr";
}

export async function loadLanguage(lng: SupportedLanguage): Promise<void> {
    if (i18n.hasResourceBundle(lng, "translation")) return;

    if (lng === "fr") {
        i18n.addResourceBundle("fr", "translation", fr, true, true);
        return;
    }

    const { default: translation } = await LOCALE_LOADERS[lng]();
    i18n.addResourceBundle(lng, "translation", translation, true, true);
}

let initPromise: Promise<typeof i18n> | null = null;

export function initI18n(): Promise<typeof i18n> {
    if (!initPromise) {
        initPromise = (async () => {
            const initialLang = detectLanguage();

            await i18n.use(initReactI18next).init({
                lng: initialLang,
                fallbackLng: "fr",
                supportedLngs: SUPPORTED_LANGUAGES,
                resources: {},
                interpolation: { escapeValue: false },
            });

            await loadLanguage(initialLang);
            if (initialLang !== "fr") {
                void loadLanguage("fr");
            }

            i18n.on("languageChanged", (lng) => {
                const code = lng.slice(0, 2) as SupportedLanguage;
                if (SUPPORTED_LANGUAGES.includes(code)) {
                    void loadLanguage(code);
                }
            });

            return i18n;
        })();
    }

    return initPromise;
}

export default i18n;
