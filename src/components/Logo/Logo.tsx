import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { useTranslation } from "react-i18next";

const Logo: FC = (): ReactElement => {
    const {t} = useTranslation("global");

    return (
        <Link to={"/my_portfolio/"} className={styles.logo_container}>
            <div className={styles.logo}></div>
            <p className={styles.logo_text}>{t("logo")}</p>
        </Link>
    );
};

export default Logo;