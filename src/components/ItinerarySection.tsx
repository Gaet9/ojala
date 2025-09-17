import React from "react";
import { X, ZoomIn } from "lucide-react";
import CompleteItineray from "../assets/Photos/Map-world.jpg";
import CaribbeanItineray from "../assets/Photos/Map-caraibe.jpg";
import ColombiaItineray from "../assets/Photos/Map-colombie.jpg";
import SAItineray from "../assets/Photos/Map-SA.jpg";

type ItineraryItem = {
    src: string;
    alt: string;
    caption: string;
};

const itineraryItems: ItineraryItem[] = [
    {
        src: CompleteItineray,
        alt: "Itinéraire complet. \nDu 11/11/22 au 31/03/24.",
        caption: "Itinéraire complet. \nDu 11/11/22 au 31/03/24.",
    },
    {
        src: CaribbeanItineray,
        alt: "Itinéraire des Caraïbes. Du 24/12/22 au 28/03/23. Pages 32-74",
        caption: "Itinéraire des Caraïbes. \nDu 24/12/22 au 28/03/23. \nPages 32-74",
    },
    {
        src: ColombiaItineray,
        alt: "Itinéraire en Colombie et Equateur. Du 28/03/23 au 12/11/23. Pages 75-152",
        caption: "Itinéraire en Colombie et Equateur. \nDu 28/03/23 au 12/11/23. \nPages 75-152",
    },
    {
        src: SAItineray,
        alt: "Itinéraire au Péru, en Bolivie et en Argentine. Du 12/11/23 au 31/03/24. Pages 153-169",
        caption: "Itinéraire au Péru, en Bolivie et en Argentine. \nDu 12/11/23 au 31/03/24. \nPages 153-169",
    },
];

const ItinerarySection = () => {
    const [selected, setSelected] = React.useState<number | null>(null);

    const openLightbox = (idx: number) => {
        setSelected(idx);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelected(null);
        document.body.style.overflow = "unset";
    };

    return (
        <section className='py-10'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6'>
                    <div className='text-center mb-10'>
                        <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                            Itinéraire du voyage
                        </h2>
                        <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto'>
                            Quatre étapes clés pour visualiser le parcours
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
                        {itineraryItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => openLightbox(idx)}
                                className='group gallery-item text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 h-full flex flex-col'>
                                <div className='relative aspect-[4/3] overflow-hidden shrink-0'>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                    />
                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                                        <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                    </div>
                                </div>
                                <div className='p-4 text-center min-h-[56px] flex items-center justify-center'>
                                    <p className='font-medium text-foreground whitespace-pre-line'>{item.caption}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {selected !== null && (
                        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
                            <div className='relative max-w-4xl max-h-full'>
                                <button
                                    onClick={closeLightbox}
                                    className='absolute top-0 -right-10 text-white hover:text-gray-300 transition-colors duration-200 z-10'>
                                    <X className='w-8 h-8 hover:bg-red-500/80 rounded transition-all duration-200' />
                                </button>
                                <img
                                    src={itineraryItems[selected].src}
                                    alt={itineraryItems[selected].alt}
                                    className='max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
                                />
                                <div className='mt-4 text-center'>
                                    <p className='text-white/80 text-lg whitespace-pre-line'>{itineraryItems[selected].caption}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ItinerarySection;
