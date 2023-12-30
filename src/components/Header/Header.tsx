import { FC, ReactElement } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Language from "../UI/Language/Language";

const Header: FC = (): ReactElement => {
    return (
        <header className={styles.header}>
            <Logo />
            <Language />
        </header>
    );
};

export default Header;