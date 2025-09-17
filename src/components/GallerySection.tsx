import React, { useState } from "react";
import photoMeta from "./photoMeta";
import { X, ZoomIn } from "lucide-react";
// Dynamically import all images from assets/Photos
const imageEntries = [
    ...Object.entries(import.meta.glob("../assets/Photos/Photo_article*.jpg", { eager: true, as: "url" })),
    ...Object.entries(import.meta.glob("../assets/Photos/photo_article*.jpg", { eager: true, as: "url" })),
    ...Object.entries(import.meta.glob("../assets/Photos/Photo_article*.png", { eager: true, as: "url" })),
    ...Object.entries(import.meta.glob("../assets/Photos/photo_article*.png", { eager: true, as: "url" })),
];

// Sort by the number in Photo_articleX.jpg and keep filename
const sortedImages = imageEntries
    .map(([path, url]) => {
        const match = path.match(/(?:[Pp]hoto_article)(\d+)_?(\d+)?\.(jpg|png)$/);
        // Handles Photo_articleX.jpg, photo_articleX.jpg, Photo_articleX_Y.png, etc.
        const mainNum = match ? parseInt(match[1], 10) : 0;
        const subNum = match && match[2] ? parseInt(match[2], 10) : 0;
        // Extract filename from path
        const filename = path.split("/").pop() || path;
        return { url, mainNum, subNum, filename };
    })
    .sort((a, b) => a.mainNum - b.mainNum || a.subNum - b.subNum);

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [carouselPage, setCarouselPage] = useState(0); // 0: first 20, 1: rest
    // Ref for the title section
    const titleRef = React.useRef<HTMLDivElement>(null);
    // Removed auto-scroll on page change to avoid unexpected jumps

    // Generate gallery items from images
    const galleryItems = sortedImages.map((img, idx) => {
        // Use filename as key for metadata lookup
        const meta = photoMeta[img.filename];
        return {
            src: img.url,
            caption: meta && meta.caption ? meta.caption : `Photo ${idx + 1}`,
            alt: meta && meta.alt ? meta.alt : `Photo ${idx + 1}`,
        };
    });

    // Split into multiple pages
    const firstPageItems = galleryItems.slice(0, 20);
    const secondPageItems = galleryItems.slice(20, 30);
    const thirdPageItems = galleryItems.slice(30, 35);
    const fourthPageItems = galleryItems.slice(35, 44);
    const fifthPageItems = galleryItems.slice(44, 49);
    const sixthPageItems = galleryItems.slice(49, 55);
    const seventhPageItems = galleryItems.slice(55, 67);
    const eighthPageItems = galleryItems.slice(67, 86);
    const ninethPageItems = galleryItems.slice(86, 99);
    const tenthPageItems = galleryItems.slice(99, 115);
    const eleventhPageItems = galleryItems.slice(115, 122);
    const twelvethPageItems = galleryItems.slice(122);
    const pages = [
        firstPageItems,
        secondPageItems,
        thirdPageItems,
        fourthPageItems,
        fifthPageItems,
        sixthPageItems,
        seventhPageItems,
        eighthPageItems,
        ninethPageItems,
        tenthPageItems,
        eleventhPageItems,
        twelvethPageItems,
    ];

    // Per-page metadata (custom title and subtitle for each page)
    const defaultTitle = "Illustrations";
    const defaultSubtitle = "Photos pour accompagner la lecture du livre";
    const pageMeta: { title: string; subtitle: string }[] = Array.from({ length: pages.length }, () => ({
        title: defaultTitle,
        subtitle: defaultSubtitle,
    }));
    // Example customization (you can edit these lines to set your own titles):
    pageMeta[0] = { title: "Traversée de l'Atlantique", subtitle: "Du 11/11/22 au 25/12/22. \nPages 1-32" };
    pageMeta[1] = { title: "Guadeloupe", subtitle: "Du 26/12/22 au 08/02/23. \nPages 33-52." };
    pageMeta[2] = { title: "Antigua", subtitle: "Du 19/02/23 au 22/02/23. \nPages 53-58." };
    pageMeta[3] = { title: "Kundalini - Dominique - Martinique", subtitle: "Du 27/02/23 au 24/03/23. \nPages 59-68." };
    pageMeta[4] = { title: "Traversée de la mer des Caraïbes", subtitle: "Du 28/03/23 au 08/04/23. \nPages 69-75." };
    pageMeta[5] = { title: "Finca colombienne", subtitle: "Du 12/04/23 au 17/05/23. \nPages 76-82." };
    pageMeta[6] = { title: "Traversée de la Colombie en Vélo, partie 1", subtitle: "Du 19/05/23 au 25/06/23. \nPages 83-102." };
    pageMeta[7] = { title: "Traversée de la Colombie en Vélo, partie 2", subtitle: "Du 07/07/23 au 27/08/23. \nPages 103-132." };
    pageMeta[8] = { title: "Traversée de l'Equateur en Vélo", subtitle: "Du 28/08/23 au 12/11/23. \nPages 133-152." };
    pageMeta[9] = { title: "Perou - Amazonie - Cusco", subtitle: "Du 23/11/23 au 05/02/24. \nPages 153-164." };
    pageMeta[10] = { title: "Bolivie", subtitle: "Du 13/02/24 au 25/02/24. \nPages 165-166." };
    pageMeta[11] = { title: "Argentine", subtitle: "Du 03/03/24 au 31/03/24. \nPages 167-168." };

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
    };

    return (
        <section className='py-24 bg-background'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6'>
                    <div className='text-center mb-16' ref={titleRef}>
                        <h2 className='text-3xl md:text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent'>
                            Illustrations
                        </h2>
                        <h3 className='text-2xl md:text-3xl font-semibold mb-2 whitespace-pre-line'>
                            {pageMeta[carouselPage]?.title || defaultTitle}
                        </h3>
                        <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto whitespace-pre-line'>
                            {pageMeta[carouselPage]?.subtitle || defaultSubtitle}
                        </p>
                    </div>
                    {/* Carousel navigation top*/}
                    <div className='flex justify-center mb-8 gap-4 flex-wrap'>
                        {pages.map((items, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-2 rounded font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 ${
                                    carouselPage === idx
                                        ? "bg-primary text-white shadow-primary hover:-translate-y-0.5"
                                        : "border border-primary text-primary bg-white/70 hover:shadow-md hover:shadow-primary hover:-translate-y-0.5"
                                }`}
                                onClick={() => setCarouselPage(idx)}
                                disabled={carouselPage === idx || items.length === 0}>
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    <div className='gallery-grid max-w-6xl mx-auto'>
                        {pages[carouselPage].map((item, index) => {
                            // Calculate the correct global index
                            let globalIndex = 0;
                            for (let i = 0; i < carouselPage; i++) {
                                globalIndex += pages[i].length;
                            }
                            globalIndex += index;

                            return (
                                <div
                                    key={globalIndex}
                                    className='gallery-item fade-in group transform-gpu ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 h-full flex flex-col will-change-transform'
                                    onClick={() => openLightbox(globalIndex)}>
                                    <div className='relative overflow-hidden aspect-[4/3]'>
                                        <img src={item.src} alt={item.alt} className='w-full h-full object-cover' />
                                        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                            <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                        </div>
                                    </div>
                                    <div className='gallery-caption'>
                                        <p className='whitespace-pre-line'>{item.caption}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Carousel navigation bottom*/}
                    <div className='flex justify-center mt-8 gap-4 flex-wrap'>
                        {pages.map((items, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-2 rounded font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 ${
                                    carouselPage === idx
                                        ? "bg-primary text-white shadow-primary hover:-translate-y-0.5"
                                        : "border border-primary text-primary bg-white/70 hover:shadow-md hover:shadow-primary hover:-translate-y-0.5"
                                }`}
                                onClick={() => {
                                    setCarouselPage(idx);
                                    // Scroll to title section
                                    if (titleRef.current) {
                                        const y = titleRef.current.getBoundingClientRect().top + window.scrollY - 24;
                                        window.scrollTo({ top: y, behavior: "smooth" });
                                    }
                                }}
                                disabled={carouselPage === idx || items.length === 0}>
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {selectedImage !== null && (
                        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
                            <div className='relative max-w-4xl max-h-full'>
                                <button
                                    onClick={closeLightbox}
                                    className='absolute top-0 -right-10 text-white hover:text-gray-300 transition-colors duration-200 z-10'>
                                    <X className='w-8 h-8 hover:bg-red-500/80 rounded transition-all duration-200' />
                                </button>
                                <img
                                    src={galleryItems[selectedImage].src}
                                    alt={galleryItems[selectedImage].alt}
                                    className='max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
                                />
                                <div className='mt-4 text-center'>
                                    <p className='text-white/80 text-lg'>{galleryItems[selectedImage].caption}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
