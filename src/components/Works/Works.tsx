import { FC, ReactElement } from "react";
import styles from "./Works.module.css";
import { Link } from "react-router-dom";

const Works: FC = (): ReactElement => {
    return (
        <div className={styles.works}>
            <p className={styles.worksHead}>Представляю вам мои некторые работы отобранные для портфолио</p>
            <div className={styles.workItem}>
                <Link to={"https://nwarrioo.github.io/dataware/"} target={"_blank"} className={styles.workImg}>
                    <img src="./dataware.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>Пример простой страницы написанной на HTML и СSS</p>
                    <Link to={"https://nwarrioo.github.io/dataware/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Перейти на страницу</Link>
                    <Link to={"https://www.figma.com/file/WZMYFpOUevKClkwXx80H9d/example-1?type=design&node-id=0-1&mode=design&t=Q3M7CSiemRlb87iz-0"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Перейти на страницу просмотра макета</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/example_page_01/"} 
                    target={"_blank"}>
                    <img src="./example_page_01.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>Пример страницы с использованием SASS</p>
                    <Link to={"https://nwarrioo.github.io/example_page_01/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Перейти на страницу</Link>
                    <Link to={"https://www.figma.com/file/nqkUuPD1jy6ahrJg97wD8x/Exam-2?type=design&node-id=8-5967&mode=design&t=NUG6Wp0YT8qWwLca-0"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Перейти на страницу просмотра макета</Link>
                </div>
            </div>
        </div>
    );
};

export default Works;