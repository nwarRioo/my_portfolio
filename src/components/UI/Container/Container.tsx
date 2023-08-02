import { FC, ReactElement } from "react";
import styles from "./Container.module.css";
import { ReactNode } from "react";

interface IContainerProps {
    children: ReactNode
}

export const Container: FC<IContainerProps> = ({children}): ReactElement => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

