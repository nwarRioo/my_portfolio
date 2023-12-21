import { FC, ReactElement } from "react";
import styles from "./Works.module.css";
import { Link } from "react-router-dom";

const Works: FC = (): ReactElement => {
    return (
        <div className={styles.works}>
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
                    >Перейти на страницу просмотра макета Figma</Link>
                    <Link to={"https://github.com/nwarRioo/dataware"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Ссылка на проект github</Link>
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
                    >Перейти на страницу просмотра макета Figma</Link>
                    <Link to={"https://github.com/nwarRioo/example_page_01"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Ссылка на проект github</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/e-market/"} 
                    target={"_blank"}>
                    <img src="./my_shop.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>Пример страницы на React TS с использованием Redux Toolkit</p>
                    <Link to={"https://nwarrioo.github.io/e-market/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Перейти на страницу</Link>
                    <Link to={"https://github.com/nwarRioo/e-market"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Ссылка на проект github</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/example_page_01/"} 
                    target={"_blank"}>
                    <img src="./chat.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>Пример веб форума на базе React TS и MongoDB</p>
                    <Link to={"https://www.youtube.com/watch?v=YA3lsfyahcg"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Ссылка на видеоролик с процессом работы форума</Link>
                    <Link to={"https://github.com/nwarRioo/chat"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >Ссылка на проект github</Link>
                </div>
            </div>
        </div>
    );
};

export default Works;