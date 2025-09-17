import { ExternalLink, Star } from "lucide-react";
import bookCover from "../assets/Photos/Couverture2.jpg";

const HeroSection = () => {
    return (
        <section className='min-h-screen bg-gradient-hero relative overflow-hidden'>
            {/* Background decoration */}
            <div className='absolute inset-0 bg-gradient-subtle opacity-50' />
            <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl' />

            <div className='min-h-screen flex items-center justify-center text-center relative z-10'>
                <div className='w-full max-w-6xl mx-auto px-6'>
                    {/* Book Cover */}
                    <div className='py-12 fade-in'>
                        <div className='inline-block relative'>
                            <img
                                src={bookCover}
                                alt='Book Cover'
                                className='w-64 md:w-80 h-auto mx-auto rounded-2xl shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-500'
                            />
                            <div className='absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg'>
                                <Star className='w-4 h-4 inline mr-1' />
                                Nouveauté
                            </div>
                        </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className='mb-12 slide-up' style={{ animationDelay: "0.2s" }}>
                        <h2 className='hero-title mb-6'>OJALÀ</h2>
                        <p className='hero-tagline max-w-3xl mx-auto'>
                            Découvrez l'histoire d'un voyage à la voile à travers l'Atlantique et les Caraïbes, puis à vélo dans les Andes
                            d'Amérique du Sud.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className='scale-in' style={{ animationDelay: "0.4s" }}>
                        <a
                            href='https://amzn.eu/d/its4qzt'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-primary inline-flex items-center text-lg group'>
                            <span>Obtenez votre exemplaire</span>
                            <ExternalLink className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                        </a>

                        <div className='mt-6 flex items-center justify-center gap-4 text-muted-foreground'>
                            <div className='flex items-center gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className='w-4 h-4 fill-primary text-primary' />
                                ))}
                                <span className='ml-2 font-medium'>Note : 5/5</span>
                            </div>
                            <span className='w-1 h-1 bg-muted-foreground rounded-full' />
                            <span className='font-medium'>Disponible maintenant en livre et ebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
