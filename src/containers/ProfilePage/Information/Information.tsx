import { FC, ReactElement } from "react";
import styles from "./Information.module.css";
import avatar from "../../../assets/images/Untitled-1.png";
import {useTranslation} from 'react-i18next';
const Information: FC = (): ReactElement => {
    const {t} = useTranslation("global");
    return (
        <div className={styles.informationBlock}>
            <div className={styles.avatarBox}>
                <img src={avatar} alt="avatar" />
            </div>
            <h1>{t("informationBlock.name")}</h1>
            <p>{t("informationBlock.specialization")}</p>
        </div>
    );
};

export default Information;