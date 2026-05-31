import { Suspense, useEffect, useRef, useState, type ComponentType, type LazyExoticComponent, type ReactNode } from "react";

type LazyWhenVisibleProps = {
    component: LazyExoticComponent<ComponentType>;
    fallback: ReactNode;
    rootMargin?: string;
    minHeight?: string;
};

const LazyWhenVisible = ({ component: LazyComponent, fallback, rootMargin = "200px 0px", minHeight = "24rem" }: LazyWhenVisibleProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = containerRef.current;
        if (!node || isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [isVisible, rootMargin]);

    return (
        <div ref={containerRef} style={{ minHeight: isVisible ? undefined : minHeight }}>
            {isVisible ? (
                <Suspense fallback={fallback}>
                    <LazyComponent />
                </Suspense>
            ) : (
                fallback
            )}
        </div>
    );
};

export default LazyWhenVisible;
