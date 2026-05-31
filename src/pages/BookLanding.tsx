import { lazy, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import LazyWhenVisible from "@/components/LazyWhenVisible";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import TopNav from "@/components/TopNav";

const StatsSection = lazy(() => import("@/components/StatsSection"));
const Footer = lazy(() => import("@/components/Footer"));
const LeafletMapSection = lazy(() => import("@/components/LeafletMapSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));

const SectionFallback = ({ minHeight = "24rem" }: { minHeight?: string }) => (
    <div className='w-full animate-pulse bg-muted/30' style={{ minHeight }} aria-hidden='true' />
);

const BookLanding = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "50px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in");
                }
            });
        }, observerOptions);

        const animatableElements = document.querySelectorAll(".fade-in, .slide-up, .scale-in");
        animatableElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className='min-h-screen bg-background w-full'>
            <TopNav>
                <LanguageToggle />
                <ModeToggle />
            </TopNav>
            <section id='book'>
                <HeroSection />
            </section>
            <section id='stats'>
                <LazyWhenVisible
                    component={StatsSection}
                    fallback={<SectionFallback minHeight='24rem' />}
                    minHeight='24rem'
                />
            </section>
            <section id='map' className='scroll-mt-16'>
                <LazyWhenVisible
                    component={LeafletMapSection}
                    fallback={<SectionFallback minHeight='32rem' />}
                    minHeight='32rem'
                />
            </section>
            <section id='photos' className='-scroll-mt-6'>
                <LazyWhenVisible
                    component={GallerySection}
                    fallback={<SectionFallback minHeight='40rem' />}
                    minHeight='40rem'
                />
            </section>
            <section id='contact'>
                <LazyWhenVisible
                    component={Footer}
                    fallback={<SectionFallback minHeight='16rem' />}
                    minHeight='16rem'
                />
            </section>
        </div>
    );
};

export default BookLanding;
