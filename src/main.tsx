import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initI18n } from "./i18n";
import "./index.css";

if (import.meta.env.DEV) {
    void import("./fonts.css");
}

const root = createRoot(document.getElementById("root")!);

initI18n().then(() => {
    root.render(<App />);
});
