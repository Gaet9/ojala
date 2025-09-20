import { ExternalLink, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/gaetandelorgeril", label: "LinkedIn" },
        { icon: Mail, href: "mailto:gaetan.delorgeril@gmail.com", label: "Email" },
    ];

    return (
        <footer className='bg-gradient-subtle'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6 py-16'>
                    <div className='text-center'>
                        {/* Secondary CTA */}
                        <div className='mb-12'>
                            <h3 className='text-2xl md:text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                                {t("footer.ready")}
                            </h3>
                            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>{t("footer.pitch")}</p>
                            <a
                                href='https://amzn.eu/d/ebWaZTI'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn-primary inline-flex items-center text-lg group'>
                                <span>{t("footer.cta")}</span>
                                <ExternalLink className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='mb-8'>
                            <p className='text-muted-foreground mb-6'>{t("footer.contact")}</p>
                            <div className='flex justify-center gap-4'>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-110'
                                        aria-label={social.label}>
                                        <social.icon className='w-5 h-5' />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className='pt-8'>
                            <p className='text-muted-foreground text-sm'>{t("footer.rights", { year: currentYear })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
