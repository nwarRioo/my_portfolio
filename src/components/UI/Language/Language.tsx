import { ChangeEvent, FC, ReactElement, useState } from "react";
import styles from "./Language.module.css";
import { useTranslation } from "react-i18next";
import bus from "../../../assets/images/bus2.png";
import matryoshka from "../../../assets/images/matryoshka.png";
import eiffel from "../../../assets/images/eiffel4.png";

const Language: FC = (): ReactElement => {
    const {i18n} = useTranslation("global");
    const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        setShow(false)
    };

    const [show, setShow] = useState(false)
    const showSelect = () => {
        setShow(!show);
    }

    return (
        <button className={styles.button}>
            <img src={i18n.language === "ru" ? matryoshka : i18n.language === "en" ? bus : eiffel} alt="language" 
             onClick={showSelect}
             
            />
            <select onChange={handleChangeLanguage} value={i18n.language}
            className={show ? `${styles.show}` : ""}
            >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="fr">Français</option>
            </select>
        </button>
    );
};

export default Language;