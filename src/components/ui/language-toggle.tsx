import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const FlagFR = () => (
    <svg width='18' height='12' viewBox='0 0 3 2' aria-hidden>
        <rect width='1' height='2' x='0' y='0' fill='#0055A4' />
        <rect width='1' height='2' x='1' y='0' fill='#FFFFFF' />
        <rect width='1' height='2' x='2' y='0' fill='#EF4135' />
    </svg>
);

const FlagGB = () => (
    <svg width='18' height='12' viewBox='0 0 60 30' aria-hidden>
        <clipPath id='gb-a'>
            <path d='M0,0 v30 h60 v-30 z' />
        </clipPath>
        <clipPath id='gb-b'>
            <path d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z' />
        </clipPath>
        <g clipPath='url(#gb-a)'>
            <path d='M0,0 v30 h60 v-30 z' fill='#012169' />
            <path d='M0,0 L60,30 M60,0 L0,30' stroke='#fff' strokeWidth='6' />
            <path d='M0,0 L60,30 M60,0 L0,30' clipPath='url(#gb-b)' stroke='#C8102E' strokeWidth='4' />
            <path d='M30,0 v30 M0,15 h60' stroke='#fff' strokeWidth='10' />
            <path d='M30,0 v30 M0,15 h60' stroke='#C8102E' strokeWidth='6' />
        </g>
    </svg>
);

const FlagES = () => (
    <svg width='18' height='12' viewBox='0 0 3 2' aria-hidden>
        <rect width='3' height='2' fill='#AA151B' />
        <rect width='3' height='1.2' y='0.4' fill='#F1BF00' />
    </svg>
);

const LANGUAGE_OPTIONS: Array<{ code: "en" | "es" | "fr"; label: string; Icon: () => JSX.Element }> = [
    { code: "en", label: "English", Icon: FlagGB },
    { code: "es", label: "Español", Icon: FlagES },
    { code: "fr", label: "Français", Icon: FlagFR },
];

export function LanguageToggle() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: "en" | "es" | "fr") => {
        i18n.changeLanguage(lng);
    };

    const currentCode: "en" | "es" | "fr" = i18n.language.startsWith("fr") ? "fr" : i18n.language.startsWith("es") ? "es" : "en";

    const CurrentIcon = LANGUAGE_OPTIONS.find((o) => o.code === currentCode)?.Icon ?? (() => <span aria-hidden>🌐</span>);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className='hover:bg-gradient-hero' variant='outline' size='icon' aria-label='Change language'>
                    <span className='inline-block' aria-hidden>
                        <CurrentIcon />
                    </span>
                    <span className='sr-only'>Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                {LANGUAGE_OPTIONS.map((opt) => (
                    <DropdownMenuItem key={opt.code} onClick={() => changeLanguage(opt.code)}>
                        {opt.label}
                        <span className='ml-2 inline-block align-middle'>
                            <opt.Icon />
                        </span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
