import { FC, ReactElement } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Layout: FC = (): ReactElement => {
    const {t} = useTranslation("global");

    return (
        <div className={styles.layout}>
            <div className={styles.navLinks}>
                <NavLink className={styles.navButton} to={"feed"}>{t("blockTitle.feed")}</NavLink>
                <NavLink className={styles.navButton} to={"/my_portfolio/"}>{t("blockTitle.aboutMe")}</NavLink>
                <NavLink className={styles.navButton} to={"works"}>{t("blockTitle.works")}</NavLink>
            </div>
            
            <Outlet />
        </div>
    );
};

export default Layout;