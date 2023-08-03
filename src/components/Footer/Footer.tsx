import { FC, ReactElement } from "react";
import styles from "./Footer.module.css";

const Footer: FC = (): ReactElement => {
    return (
        <footer className={styles.footer}>
            
            <div>
                nwarRioo © 2023
            </div>
        </footer>
    );
};

export default Footer;