import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import getPhotoMeta from "./photoMeta";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
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
    const [shouldScrollToTitle, setShouldScrollToTitle] = useState(false);
    // Ref for the title section
    const titleRef = React.useRef<HTMLDivElement>(null);
    // Refs for swipe detection
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    // Scroll to the section title only when explicitly requested (via button click)
    React.useEffect(() => {
        if (!shouldScrollToTitle) return;
        if (titleRef.current) {
            const y = titleRef.current.getBoundingClientRect().top + window.scrollY - 24;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        setShouldScrollToTitle(false);
    }, [carouselPage, shouldScrollToTitle]);

    // Generate gallery items from images
    const galleryItems = sortedImages.map((img, idx) => {
        // Use filename as key for metadata lookup
        const meta = getPhotoMeta(img.filename);
        return {
            src: img.url,
            caption: meta && meta.caption ? meta.caption : `Photo ${idx + 1}`,
            alt: meta && meta.alt ? meta.alt : `Photo ${idx + 1}`,
        };
    });

    // Split into multiple pages
    const firstPageItems = galleryItems.slice(0, 30);
    const secondPageItems = galleryItems.slice(30, 80);
    const thirdPageItems = galleryItems.slice(80, 91);
    const fourthPageItems = galleryItems.slice(91, 117);
    const fifthPageItems = galleryItems.slice(117, 125);
    const sixthPageItems = galleryItems.slice(125, 155);
    const seventhPageItems = galleryItems.slice(155, 204);
    const eighthPageItems = galleryItems.slice(204, 307);
    const ninethPageItems = galleryItems.slice(307, 370);
    const tenthPageItems = galleryItems.slice(370, 439);
    const eleventhPageItems = galleryItems.slice(439, 470);
    const twelvethPageItems = galleryItems.slice(470);
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
    const { t } = useTranslation();
    const defaultTitle = t("gallery.defaultTitle");
    const defaultSubtitle = t("gallery.defaultSubtitle");
    const pageMeta: { title: string; subtitle: string }[] = Array.from({ length: pages.length }, () => ({
        title: defaultTitle,
        subtitle: defaultSubtitle,
    }));
    // Example customization (localized via i18n)
    pageMeta[0] = { title: t("gallery.pages.0.title"), subtitle: t("gallery.pages.0.subtitle") };
    pageMeta[1] = { title: t("gallery.pages.1.title"), subtitle: t("gallery.pages.1.subtitle") };
    pageMeta[2] = { title: t("gallery.pages.2.title"), subtitle: t("gallery.pages.2.subtitle") };
    pageMeta[3] = { title: t("gallery.pages.3.title"), subtitle: t("gallery.pages.3.subtitle") };
    pageMeta[4] = { title: t("gallery.pages.4.title"), subtitle: t("gallery.pages.4.subtitle") };
    pageMeta[5] = { title: t("gallery.pages.5.title"), subtitle: t("gallery.pages.5.subtitle") };
    pageMeta[6] = { title: t("gallery.pages.6.title"), subtitle: t("gallery.pages.6.subtitle") };
    pageMeta[7] = { title: t("gallery.pages.7.title"), subtitle: t("gallery.pages.7.subtitle") };
    pageMeta[8] = { title: t("gallery.pages.8.title"), subtitle: t("gallery.pages.8.subtitle") };
    pageMeta[9] = { title: t("gallery.pages.9.title"), subtitle: t("gallery.pages.9.subtitle") };
    pageMeta[10] = { title: t("gallery.pages.10.title"), subtitle: t("gallery.pages.10.subtitle") };
    pageMeta[11] = { title: t("gallery.pages.11.title"), subtitle: t("gallery.pages.11.subtitle") };

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
    };

    const goToPreviousImage = useCallback(() => {
        setSelectedImage((current) => {
            if (current === null) return null;
            if (current > 0) {
                return current - 1;
            } else {
                // Loop to last image
                return galleryItems.length - 1;
            }
        });
    }, [galleryItems.length]);

    const goToNextImage = useCallback(() => {
        setSelectedImage((current) => {
            if (current === null) return null;
            if (current < galleryItems.length - 1) {
                return current + 1;
            } else {
                // Loop to first image
                return 0;
            }
        });
    }, [galleryItems.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === "ArrowLeft") {
                goToPreviousImage();
            } else if (e.key === "ArrowRight") {
                goToNextImage();
            } else if (e.key === "Escape") {
                closeLightbox();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, goToNextImage, goToPreviousImage]);

    // Touch swipe handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNextImage();
        }
        if (isRightSwipe) {
            goToPreviousImage();
        }
    };

    return (
        <section className='py-24 bg-gradient-radial from-white/80 via-white/70 to-white/90 dark:from-primary/10 dark:via-primary/5 dark:to-black/95'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-6'>
                    <div className='text-center mb-16' ref={titleRef}>
                        <h2 className='text-3xl md:text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent'>
                            {t("gallery.heading")}
                        </h2>
                        <h3 className='text-2xl md:text-3xl font-semibold mb-2 whitespace-pre-line'>
                            {pageMeta[carouselPage]?.title || defaultTitle}
                        </h3>
                        <p className='text-xl text-muted-foreground font-medium max-w-2xl mx-auto whitespace-pre-line'>
                            {pageMeta[carouselPage]?.subtitle || defaultSubtitle}
                        </p>
                    </div>
                    {/* Carousel navigation top*/}
                    <div className='flex justify-center mb-8 gap-2.5 sm:gap-4 flex-wrap'>
                        {pages.map((items, idx) => (
                            <button
                                key={idx}
                                className={`px-2 py-1 sm:px-4 rounded text-xs sm:text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 ${
                                    carouselPage === idx ?
                                        "bg-primary text-white shadow-primary hover:-translate-y-0.5"
                                    :   "border border-primary text-primary bg-white/70 hover:shadow-md hover:shadow-primary hover:-translate-y-0.5 dark:border-neutral-700 dark:text-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                }`}
                                onClick={() => {
                                    setCarouselPage(idx);
                                    setShouldScrollToTitle(true);
                                }}
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

                            // Determine size based on position in a 6-item pattern
                            // Pattern repeats: big (2x2), small, small, medium (2x1), small, small
                            const patternIndex = index % 6;
                            let sizeClass = "";
                            let aspectClass = "aspect-[4/3]";

                            if (patternIndex === 0) {
                                // Big - spans 2 columns and 2 rows
                                sizeClass = "col-span-2 row-span-2";
                                aspectClass = "aspect-[4/3]";
                            } else if (patternIndex === 3) {
                                // Medium - spans 2 columns, 1 row
                                sizeClass = "col-span-2 row-span-1";
                                aspectClass = "aspect-[2/1]";
                            } else {
                                // Small - spans 1 column, 1 row
                                sizeClass = "col-span-1 row-span-1";
                                aspectClass = "aspect-[4/3]";
                            }

                            return (
                                <div
                                    key={globalIndex}
                                    className={`gallery-item ${sizeClass} fade-in group transform-gpu ease-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 relative will-change-transform`}
                                    onClick={() => openLightbox(globalIndex)}>
                                    <div className={`relative overflow-hidden ${aspectClass} w-full h-full`}>
                                        <img src={item.src} alt={item.alt} className='w-full h-full object-cover' />
                                        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                            <ZoomIn className='w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                        </div>
                                        {item.caption !== "" &&
                                            item.caption !== " " &&
                                            item.caption !== undefined &&
                                            item.caption !== null && (
                                                <div className='gallery-caption absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 md:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'>
                                                    <p className='whitespace-pre-line text-white text-[10px] sm:text-xs md:text-base font-medium'>
                                                        {item.caption}
                                                    </p>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Carousel navigation bottom*/}
                    <div className='flex justify-center mt-8 gap-2.5 sm:gap-4 flex-wrap'>
                        {pages.map((items, idx) => (
                            <button
                                key={idx}
                                className={`px-2 py-1 sm:px-4 rounded text-xs sm:text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 ${
                                    carouselPage === idx ?
                                        "bg-primary text-white shadow-primary hover:-translate-y-0.5"
                                    :   "border border-primary text-primary bg-white/70 hover:shadow-md hover:shadow-primary hover:-translate-y-0.5 dark:border-neutral-700 dark:text-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                }`}
                                onClick={() => {
                                    setCarouselPage(idx);
                                    setShouldScrollToTitle(true);
                                }}
                                disabled={carouselPage === idx || items.length === 0}>
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    {/* Lightbox */}
                    {selectedImage !== null && (
                        <div
                            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm'
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}>
                            <div className='relative max-w-4xl max-h-full w-full'>
                                <button
                                    onClick={closeLightbox}
                                    className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10'>
                                    <X className='w-8 h-8 hover:bg-red-500/80 rounded transition-all duration-200' />
                                </button>

                                {/* Previous button */}
                                {galleryItems.length > 1 && (
                                    <button
                                        onClick={goToPreviousImage}
                                        className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2'>
                                        <ChevronLeft className='w-8 h-8' />
                                    </button>
                                )}

                                {/* Next button */}
                                {galleryItems.length > 1 && (
                                    <button
                                        onClick={goToNextImage}
                                        className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2'>
                                        <ChevronRight className='w-8 h-8' />
                                    </button>
                                )}

                                <img
                                    src={galleryItems[selectedImage].src}
                                    alt={galleryItems[selectedImage].alt}
                                    className='max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl mx-auto'
                                />
                                <div className='mt-4 text-center'>
                                    <p className='text-white/80 text-lg'>{galleryItems[selectedImage].caption}</p>
                                    {galleryItems.length > 1 && (
                                        <p className='text-white/60 text-sm mt-2'>
                                            {selectedImage + 1} / {galleryItems.length}
                                        </p>
                                    )}
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
