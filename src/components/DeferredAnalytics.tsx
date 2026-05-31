import { useEffect, useState, type ComponentType } from "react";

const DeferredAnalytics = () => {
    const [AnalyticsModule, setAnalyticsModule] = useState<ComponentType | null>(null);
    const [SpeedInsightsModule, setSpeedInsightsModule] = useState<ComponentType | null>(null);

    useEffect(() => {
        const load = () => {
            void Promise.all([
                import("@vercel/analytics/react").then((m) => setAnalyticsModule(() => m.Analytics)),
                import("@vercel/speed-insights/react").then((m) => setSpeedInsightsModule(() => m.SpeedInsights)),
            ]);
        };

        if ("requestIdleCallback" in window) {
            const id = window.requestIdleCallback(load, { timeout: 3000 });
            return () => window.cancelIdleCallback(id);
        }

        const timer = window.setTimeout(load, 2000);
        return () => window.clearTimeout(timer);
    }, []);

    return (
        <>
            {AnalyticsModule ? <AnalyticsModule /> : null}
            {SpeedInsightsModule ? <SpeedInsightsModule /> : null}
        </>
    );
};

export default DeferredAnalytics;
