import { FC, ReactElement } from "react";
import styles from "./Works.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Works: FC = (): ReactElement => {
    const {t} = useTranslation("global");
    return (
        <div className={styles.works}>
            <div className={styles.workItem}>
                <Link to={"https://nwarrioo.github.io/dataware/"} target={"_blank"} className={styles.workImg}>
                    <img src="./dataware.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.htmlCss")}</p>
                    <Link to={"https://nwarrioo.github.io/dataware/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.link")}</Link>
                    <Link to={"https://www.figma.com/file/WZMYFpOUevKClkwXx80H9d/example-1?type=design&node-id=0-1&mode=design&t=Q3M7CSiemRlb87iz-0"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.figmaLink")}</Link>
                    <Link to={"https://github.com/nwarRioo/dataware"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/example_page_01/"} 
                    target={"_blank"}>
                    <img src="./example_page_01.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.htmlSass")}</p>
                    <Link to={"https://nwarrioo.github.io/example_page_01/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.link")}</Link>
                    <Link to={"https://www.figma.com/file/nqkUuPD1jy6ahrJg97wD8x/Exam-2?type=design&node-id=8-5967&mode=design&t=NUG6Wp0YT8qWwLca-0"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.figmaLink")}</Link>
                    <Link to={"https://github.com/nwarRioo/example_page_01"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/e-market/"} 
                    target={"_blank"}>
                    <img src="./my_shop.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.reactTs")}</p>
                    <Link to={"https://nwarrioo.github.io/e-market/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.link")}</Link>
                    <Link to={"https://github.com/nwarRioo/e-market"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://github.com/nwarRioo/chat"} 
                    target={"_blank"}>
                    <img src="./chat.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.forum")}</p>
                    <Link to={"https://www.youtube.com/watch?v=YA3lsfyahcg"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.youtubeLink")}</Link>
                    <Link to={"https://github.com/nwarRioo/chat"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/parallax/"} 
                    target={"_blank"}>
                    <img src="./parallax.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.parallax")}</p>
                    <Link to={"https://nwarrioo.github.io/parallax/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.link")}</Link>
                    <Link to={"https://github.com/nwarRioo/parallax"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/game/"} 
                    target={"_blank"}>
                    <img src="./game.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.game")}</p>
                    <Link to={"https://nwarrioo.github.io/game/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.link")}</Link>
                    <Link to={"https://github.com/nwarRioo/game"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                </div>
            </div>
            <div className={styles.workItem}>
                <Link className={styles.workImg} to={"https://nwarrioo.github.io/story_sparkle/"} 
                    target={"_blank"}>
                    <img src="./story_sparkle.jpg" alt="website" />
                </Link>
                <div className={styles.workInfo}>
                    <p className={styles.workTitle}>{t("projects.titles.restApi")}</p>
                    <Link to={"https://nwarrioo.github.io/story_sparkle/"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.link")}</Link>
                    <Link to={"https://github.com/nwarRioo/story_sparkle"} 
                        target={"_blank"}
                        className={styles.workLink}
                    >{t("projects.githubLink")}</Link>
                    <p className={styles.workDescription}>username: <b>user</b>, password: <b>password</b></p>
                </div>
            </div>
        </div>
    );
};

export default Works;