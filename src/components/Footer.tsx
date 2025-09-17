import { ExternalLink, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/gaetandelorgeril", label: "LinkedIn" },
        { icon: Mail, href: "mailto:gaetan.delorgeril@gmail.com", label: "Email" },
    ];

    return (
        <footer className='bg-gradient-subtle border-t border-border/50'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6 py-16'>
                    <div className='text-center'>
                        {/* Secondary CTA */}
                        <div className='mb-12'>
                            <h3 className='text-2xl md:text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                                Prêt pour le voyage ?
                            </h3>
                            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
                                Rejoignez des lecteurs passionnés d'aventure qui ont déjà découvert ce carnet de voyage. Votre aventure
                                commence ici !
                            </p>
                            <a
                                href='https://amzn.eu/d/its4qzt'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='btn-secondary inline-flex items-center group'>
                                <span>Obtenez votre exemplaire maintenant</span>
                                <ExternalLink className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='mb-8'>
                            <p className='text-muted-foreground mb-6'>Contactez l'auteur</p>
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
                        <div className='pt-8 border-t border-border/50'>
                            <p className='text-muted-foreground text-sm'>© {currentYear} Tous droits réservés.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
