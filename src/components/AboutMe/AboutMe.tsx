import { FC, ReactElement } from "react";
import styles from "./AboutMe.module.css";

const AboutMe: FC = (): ReactElement => {
    return (
        <div className={styles.aboutMe}>
            <h1>Всем привет!</h1>
            <p className={styles.textLine}>Меня зовут Ануар. Являюсь Full stack Javascript разработчиком.
            </p>
            <p className={styles.textLine}>Разрабатываю веб приложения и сайты с использованием знании и навыков в следующих областях:</p>
            <ul className={styles.skillList}>
                <li>Основы верстки, HTML и СSS, Flexbox, СSS-анимации;</li>
                <li>Углубленная верстка, Адаптивность, Методология БЭМ, трансформации, SASS, Grid layout, Работа с Figma, принципы и Bootstrap;</li>
                <li>Введение в <b>Javascript</b>, Алгоритмы, массивы, циклы, функции, Объекты и их методы, Итераторы и генераторы;</li>
                <li>Работа с <b>Git</b>, работа в <b>GitHub</b> и в <b>GitLab</b>, ветки, тикеты, мердж-запросы, конфликты, Основы ветвления и слияния веток;</li>
                <li>Использование JS с Web-элементами страницы, jQuery, Пдагины, Local storage, Асинхронность, Ajax-запросы;</li>
                <li>Fetch, Promise, Замыкание, Обработка ошибок, Области видимости;</li>
                <li><b>Typescript</b>, <b>ООП</b>, Наследование, Наследование, Интерфейсы, Обобщения;</li>
                <li>NPM, Основы <b>React</b>, Архитектура проекта, состояние;</li>
                <li>Жизненный цикл React-компонентов, AJAX-запросы, Firebase, SPA-приложения, многостраничные приложения;</li>
                <li>Глобальное состояние приложения, Redux-thunk, React-хуки, React-router, <b></b>RTK Query;</li>
                <li>Основы <b>React Native</b>, Теория баз данных, <b>SQL</b>, <b>PostgreSQL</b>;</li>
                <li>Знакомство с сервером. HTTP-протокол, <b>Node.js</b>, <b>express</b>, <b>REST API</b>, CORS;</li>
                <li><b>MongoDB</b>, Mongoose, Регистрация и аутентификация;</li>
                <li>SOLID, Базовые навыки написания BASH-скриптов, Express middleware, JWT-токены;</li>
            </ul>
        </div>
    );
};

export default AboutMe;