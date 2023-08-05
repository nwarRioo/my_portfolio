import { FC, ReactElement } from "react";
import styles from "./Information.module.css";
import avatar from "../../../assets/images/porfile_avatar.jpg";

const Information: FC = (): ReactElement => {
    return (
        <div className={styles.informationBlock}>
            <div className={styles.avatarBox}>
                <img src={avatar} alt="avatar" />
            </div>
            <h1>Ануар Сатыбалдинов</h1>
            <p>Фуллстэк Javascript разработчик</p>
        </div>
    );
};

export default Information;