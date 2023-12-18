import { FC, ReactElement } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout: FC = (): ReactElement => {

    return (
        <div className={styles.layout}>
            <div className={styles.navLinks}>
                <NavLink className={styles.navButton} to={"feed"}>Лента</NavLink>
                <NavLink className={styles.navButton} to={"/my_portfolio/"}>О себе</NavLink>
                <NavLink className={styles.navButton} to={"works"}>Работы</NavLink>
            </div>
            
            <Outlet />
        </div>
    );
};

export default Layout;