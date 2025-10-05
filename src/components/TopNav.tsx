import React from "react";

const TopNav = () => {
    const links = [
        { href: "#book", label: "Book" },
        { href: "#stats", label: "Stats" },
        { href: "#map", label: "Map" },
        { href: "#photos", label: "Photos" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-border'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='h-14 flex items-center justify-center gap-4 sm:gap-6 md:gap-8'>
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className='text-sm sm:text-base text-foreground/80 hover:text-foreground font-medium transition-colors'>
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
