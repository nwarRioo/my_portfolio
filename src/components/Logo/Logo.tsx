import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo: FC = (): ReactElement => {
    return (
        <Link to={"/my_portfolio"} className={styles.logo_container}>
            <div className={styles.logo}></div>
            <p className={styles.logo_text}>Портфолио</p>
        </Link>
            
    );
};

export default Logo;