import { lazy, Suspense } from "react";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import BookLanding from "./pages/BookLanding";
import DeferredAnalytics from "@/components/DeferredAnalytics";

const NotFound = lazy(() => import("./pages/NotFound"));

const isHomePage = () => {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";
    return path === "/";
};

const App = () => (
    <ThemeProvider>
        {isHomePage() ? (
            <BookLanding />
        ) : (
            <Suspense fallback={null}>
                <NotFound />
            </Suspense>
        )}
        <DeferredAnalytics />
    </ThemeProvider>
);

export default App;
