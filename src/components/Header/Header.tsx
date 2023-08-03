import { FC, ReactElement } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header: FC = (): ReactElement => {
    return (
        <header className={styles.header}>
            <Logo />
            
        </header>
    );
};

export default Header;