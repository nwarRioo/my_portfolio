import { FC, ReactElement } from "react";
import styles from "./Demo.module.css";

const Demo: FC = (): ReactElement => {
    return (
        <div className={styles.demo} />
    );
};

export default Demo;