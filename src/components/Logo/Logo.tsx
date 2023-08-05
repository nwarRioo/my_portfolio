import { FC, ReactElement } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo: FC = (): ReactElement => {
    return (
        <Link className={styles.logo} to={"/my_portfolio"} />
    );
};

export default Logo;