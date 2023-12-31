import { FC, ReactElement } from "react";
import ReactPlayer from "react-player";
import styles from "./Feed.module.css";

const Feed:FC = (): ReactElement => {
    return (
        <div className={styles.eventsList}>
            <div className={styles.eventItem}>
                <div className={styles.eventTop}>
                    <p>20 декабря 2023</p>
                </div>
                <div className={styles.eventMain}>
                    <div className={styles.videoFrame}>
                        <ReactPlayer
                        url="https://www.youtube.com/watch?v=53kB0GKAd2k"
                        controls={true}
                        width="300px"
                        height="200px"
                        />
                    </div>
                    <div className={styles.description}>
                        <p>🚀 Привет, друзья! Новый год — новые вызовы, и я решил расширить свой стек технологий! 🚀</p>
                        <p> После года работы с React и TypeScript я решил попробовать что-то новенькое. Да-да, вы не ослышались — Vue.js! 🌐✨</p>
                        <p> Первые шаги совсем несложны, но уже вижу, как этот фреймворк отличается от моего привычного React. Мне нравится его легкость и гибкость. 💡👨‍💻</p>
                    </div>
                </div>
            </div>
            <div className={styles.eventItem}>
                <div className={styles.eventTop}>
                    <p>30 декабря 2023</p>
                </div>
                <div className={styles.eventMain}>
                    <div className={styles.description}>
                        <p>🚀🌐 <strong>Latest Web Development Trends 2024!</strong> 🌐🚀</p>
                        <p>👉 <a href="https://wpengine.com/blog/web-development-trends/" target="_blank">Link 1: Web Development Trends</a></p>
                        <p>Open the door to the future with this overview of web development trends in 2024. Exciting perspectives and innovations await you! 💡🚀</p>
                        <p>👉 <a href="https://webflow.com/blog/web-design-trends-2024#:~:text=For%202024%2C%20kinetic%20typography%20is,especially%20landing%20pages%20and%20campaigns." target="_blank">Link 2: Web Design Trends 2024</a></p>
                        <p>Discover visual trends in web design for 2024. Kinetic typography and other inspiring elements for your web projects! ✨🎨</p>
                        <p>👉 <a href="https://careerfoundry.com/en/blog/web-development/what-does-it-take-to-become-a-web-developer-everything-you-need-to-know-before-getting-started/" target="_blank">Link 3: How to Become a Web Developer</a></p>
                        <p>Step by step: everything you need to know to become a web developer. Professional advice and practical guidance for beginners. 🚀👩‍💻</p>
                        <p>Don't miss the chance to stay informed about the industry! 🔍💻</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed