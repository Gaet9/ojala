import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

type TopNavProps = {
    children?: React.ReactNode;
};

const TopNav: React.FC<TopNavProps> = ({ children }) => {
    const { t } = useTranslation();
    const links = [
        { href: "#book", label: t("nav.book") },
        { href: "#stats", label: t("nav.stats") },
        { href: "#map", label: t("nav.map") },
        { href: "#photos", label: t("nav.photos") },
        { href: "#contact", label: t("nav.contact") },
    ];

    return (
        <nav className='fixed top-0 left-0 right-0 z-[9999] backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-background/80 border-b border-border'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='flex justify-between h-14 sm:grid sm:grid-cols-3 items-center'>
                    <div className='flex items-center gap-2 justify-start'>{children}</div>
                    <div className='hidden sm:flex items-center justify-center gap-4 sm:gap-6 md:gap-8'>
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                className='text-sm sm:text-base text-foreground/80 hover:text-foreground font-medium transition-colors'>
                                {l.label}
                            </a>
                        ))}
                    </div>
                    <div className='flex items-center justify-end'>
                        <div className='sm:hidden'>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant='ghost' size='icon' aria-label='Open menu'>
                                        <Menu className='h-5 w-5' />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end' className='w-40'>
                                    {links.map((l) => (
                                        <DropdownMenuItem key={l.href} asChild>
                                            <a href={l.href} className='w-full'>
                                                {l.label}
                                            </a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
