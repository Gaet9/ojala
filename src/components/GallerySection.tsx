import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import getPhotoMeta from "./photoMeta";
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
    const [shouldScrollToTitle, setShouldScrollToTitle] = useState(false);
    // Ref for the title section
    const titleRef = React.useRef<HTMLDivElement>(null);
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
    const eleventhPageItems = galleryItems.slice(115, 121);
    const twelvethPageItems = galleryItems.slice(121);
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

    return (
        <section className='py-24 bg-background'>
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
                    <div className='flex justify-center mb-8 gap-4 flex-wrap'>
                        {pages.map((items, idx) => (
                            <button
                                key={idx}
                                className={`px-4 py-2 rounded font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 ${
                                    carouselPage === idx
                                        ? "bg-primary text-white shadow-primary hover:-translate-y-0.5"
                                        : "border border-primary text-primary bg-white/70 hover:shadow-md hover:shadow-primary hover:-translate-y-0.5 dark:border-neutral-700 dark:text-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
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
                                        : "border border-primary text-primary bg-white/70 hover:shadow-md hover:shadow-primary hover:-translate-y-0.5 dark:border-neutral-700 dark:text-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
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
                        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm'>
                            <div className='relative max-w-4xl max-h-full'>
                                <button
                                    onClick={closeLightbox}
                                    className='absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10'>
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
