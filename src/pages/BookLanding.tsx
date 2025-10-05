import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import LeafletMapSection from "@/components/LeafletMapSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import TopNav from "@/components/TopNav";

const BookLanding = () => {
    useEffect(() => {
        // Add intersection observer for animations
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

        // Observe all animatable elements
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
                <StatsSection />
            </section>
            <section id='map' className='scroll-mt-16'>
                <LeafletMapSection />
            </section>
            <section id='photos' className='-scroll-mt-6'>
                <GallerySection />
            </section>
            <section id='contact'>
                <Footer />
            </section>
        </div>
    );
};

export default BookLanding;
