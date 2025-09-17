import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ItinerarySection from "@/components/ItinerarySection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

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
            <HeroSection />
            <StatsSection />
            <ItinerarySection />
            <GallerySection />
            <Footer />
        </div>
    );
};

export default BookLanding;
