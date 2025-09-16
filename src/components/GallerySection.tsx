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
    const isInitialMountRef = React.useRef(true);

    React.useEffect(() => {
        // Skip scroll on initial mount
        if (isInitialMountRef.current) {
            isInitialMountRef.current = false;
            return;
        }

        if (titleRef.current) {
            const y = titleRef.current.getBoundingClientRect().top + window.scrollY - 24; // adjust offset as needed
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }, [carouselPage]);

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
                        <h2 className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent'>
                            Illustrations
                        </h2>
                        <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto'>
                            Photos pour accompagner la lecture du livre
                        </p>
                    </div>
                    {/* Carousel navigation top*/}
                    <div className='flex justify-center mb-8 gap-4 flex-wrap'>
                        {pages.map((items, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-2 rounded ${
                                    carouselPage === idx ? "bg-primary text-white" : "bg-muted-foreground text-primary"
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
                                    className='group gallery-item fade-in'
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={() => openLightbox(globalIndex)}>
                                    <div className='relative overflow-hidden'>
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                                        />
                                        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                                            <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                        </div>
                                    </div>
                                    <div className='gallery-caption'>
                                        <p>{item.caption}</p>
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
                                className={`px-4 py-2 rounded ${
                                    carouselPage === idx ? "bg-primary text-white" : "bg-muted-foreground text-primary"
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
                                    className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10'>
                                    <X className='w-8 h-8' />
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
