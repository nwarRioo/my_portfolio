import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "../public/locales/en/translation.json";
import global_ru from "../public/locales/ru/translation.json";
import global_fr from "../public/locales/fr/translation.json";

i18next.init({
    interpolation: {escapeValue: false},
    lng: "ru",
    resources: {
        ru: {
            global: global_ru
        },
        en: {
            global: global_en
        },
        fr: {
            global: global_fr
        }
    }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>
);
