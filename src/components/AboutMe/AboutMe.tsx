import { FC, ReactElement } from "react";
import styles from "./AboutMe.module.css";

const AboutMe: FC = (): ReactElement => {
    return (
        <div className={styles.aboutMe}>
            <h1>Всем привет!</h1>
            <p>Меня зовут Ануар. 
                В 2023 году окончил курсы (15 месяцев) на Full stack Javascript разработчика в образовательном центре Attractor school Almaty. 
                В настоящее время специализируюсь в разработке back-end и front-end частей с использованием React Typescript и Node.js. В свободное время изучаю новые технологии и инструменты веб-разработки.
            </p>
            <p>В процессе учебы в Attractor я овладел знаниями и навыками в следующих областях:</p>
            <ul>
                <li>Основы верстки, HTML и СSS, Flexbox, СSS-анимации;</li>
                <li>Углубленная верстка, Адаптивность, Методология БЭМ, трансформации, SASS, Grid layout, Работа с Figma, принципы и Bootstrap;</li>
                <li>Введение в <b>Javascript</b>, Алгоритмы, массивы, циклы, функции, Объекты и их методы, Итераторы и генераторы;</li>
                <li>Знакомство с <b>Git</b>, работа в <b>GitHub</b> и в <b>GitLab</b>, ветки, тикеты, мердж-запросы, конфликты, Основы ветвления и слияния веток;</li>
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
            <p>Также, во время обучения был опыт в коммерческой разработке корпоративного приложения для медицинского учреждения в составе команды из 6 разработчиков.</p>
        </div>
    );
};

export default AboutMe;