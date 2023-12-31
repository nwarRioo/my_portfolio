import { FC, ReactElement } from "react";
import styles from "./Footer.module.css";
import { Container } from "../UI/Container/Container";

const Footer: FC = (): ReactElement => {
    return (
        <Container>
            <footer className={styles.footer}>
                <div className={styles.contacts}>
                    <div className={styles.contactItem}>
                        <a href="https://www.instagram.com/st.bldy/" className={styles.ig_icon}></a>
                    </div>
                    <div className={styles.contactItem}>
                        <a href="https://t.me/anuar_stbldnv" className={styles.tg_icon}></a>
                    </div>
                    <div className={styles.contactItem}>
                        <a href="https://wa.me/77479119999" className={styles.wa_icon}></a>
                    </div>
                </div>
                <div>
                    nwarRioo © 2023
                </div>
            </footer>
        </Container>
        
    );
};

export default Footer;