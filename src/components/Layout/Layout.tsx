import { FC, ReactElement } from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout: FC = (): ReactElement => {

    return (
        <div className={styles.layout}>
            <div className={styles.navLinks}>
                <NavLink className={styles.navButton} to={"about"}>Ajara</NavLink>
                <NavLink className={styles.navButton} to={"works"}>GOODJOOO</NavLink>
                
            </div>
            
            <Outlet />
        </div>
    );
};

export default Layout;