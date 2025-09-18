import React from "react";
import { useTranslation } from "react-i18next";
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
        alt: "itinerary.items.complete.alt",
        caption: "itinerary.items.complete.caption",
    },
    {
        src: CaribbeanItineray,
        alt: "itinerary.items.caribbean.alt",
        caption: "itinerary.items.caribbean.caption",
    },
    {
        src: ColombiaItineray,
        alt: "itinerary.items.colombia.alt",
        caption: "itinerary.items.colombia.caption",
    },
    {
        src: SAItineray,
        alt: "itinerary.items.sa.alt",
        caption: "itinerary.items.sa.caption",
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

    const { t } = useTranslation();
    return (
        <section className='py-10'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6'>
                    <div className='text-center mb-10'>
                        <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                            {t("itinerary.heading")}
                        </h2>
                        <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto'>{t("itinerary.subtitle")}</p>
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
                                        alt={t(item.alt)}
                                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                                    />
                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                                        <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                    </div>
                                </div>
                                <div className='p-4 text-center min-h-[56px] flex items-center justify-center'>
                                    <p className='font-medium text-foreground whitespace-pre-line'>{t(item.caption)}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {selected !== null && (
                        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
                            <div className='relative max-w-4xl max-h-full'>
                                <button
                                    onClick={closeLightbox}
                                    className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10'>
                                    <X className='w-8 h-8 hover:bg-red-500/80 rounded transition-all duration-200' />
                                </button>
                                <img
                                    src={itineraryItems[selected].src}
                                    alt={t(itineraryItems[selected].alt)}
                                    className='max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
                                />
                                <div className='mt-4 text-center'>
                                    <p className='text-white/80 text-lg whitespace-pre-line'>{t(itineraryItems[selected].caption)}</p>
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
