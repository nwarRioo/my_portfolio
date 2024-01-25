import { FC, ReactElement } from "react";
import styles from "./AboutMe.module.css";
import { useTranslation } from "react-i18next";

const AboutMe: FC = (): ReactElement => {
  const {t, i18n} = useTranslation("global");
  
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.greeting}>{t("aboutMe.greeting")}</h1>
            <p className={styles.textLine}>{t("aboutMe.nameAndProfession")}</p>
            <p className={styles.textLine}>{t("aboutMe.knowledge")}</p>
            
            <ul className={styles.skillList}>
            {i18n.language === "ru" ?
                <><li>Основы верстки, HTML и СSS, Flexbox, СSS-анимации;</li>
                <li>Углубленная верстка, Адаптивность, Методология БЭМ, трансформации, SASS, Grid layout, Работа с Figma, Bootstrap;</li>
                <li>Введение в <b>Javascript</b>, Алгоритмы, массивы, циклы, функции, Объекты и их методы, Итераторы и генераторы;</li>
                <li>Работа с <b>Git</b>, работа в <b>GitHub</b> и в <b>GitLab</b>, ветки, тикеты, мердж-запросы, конфликты и решения, Основы ветвления и слияния веток;</li>
                <li>Использование JS с Web-элементами страницы, jQuery, Пдагины, Local storage, Асинхронность, Ajax-запросы;</li>
                <li>Fetch, Promise, Замыкание, Обработка ошибок, Области видимости;</li>
                <li><b>Typescript</b>, <b>ООП</b>, Наследование, Интерфейсы, Обобщения;</li>
                <li>NPM, Основы <b>React</b>, Архитектура проекта, состояние;</li>
                <li>Жизненный цикл React-компонентов, AJAX-запросы, Firebase, SPA-приложения, многостраничные приложения;</li>
                <li>Глобальное состояние приложения, Redux-thunk, React-хуки, React-router, <b>RTK Query</b>;</li>
                <li>Основы <b>React Native</b>, Теория баз данных, <b>SQL</b>, <b>PostgreSQL</b>;</li>
                <li>Знакомство с сервером, HTTP-протокол, <b>Node.js</b>, <b>express</b>, <b>REST API</b>, CORS;</li>
                <li><b>MongoDB</b>, Mongoose, Регистрация и аутентификация;</li>
                <li>SOLID, Базовые навыки написания BASH-скриптов, Express middleware, JWT-токены;</li></>
                : i18n.language === "en" ? 
                <>
                  <li>Basics of web development, HTML and CSS, Flexbox, SSS animation;</li>
                  <li>Advanced web markup, Responsive web design, Methodology BEM, Transformations, SASS, Grid layout, Working with Figma, Bootstrap;</li>      
                  <li>Introduction to <b>Javascript</b>, Algorithms, arrays, loops, functions, Objects and their methods, Iterators and generators;</li>
                  <li>Working with <b>Git</b>, using <b>GitHub</b> and <b>GitLab</b>, branches, tickets, merge requests, Conflicts and resolutions, Basics of branching and merging branches;</li>          
                  <li>Using JS with Web page elements, jQuery, Plugins, Local storage, Asynchrony, Ajax requests;</li>
                  <li>Fetch, Promise, Closures, Error Handling, Scopes;</li>
                  <li><b>Typescript</b>, <b>OOP</b>, Inheritance, Inheritance, Interfaces, Generics;</li>
                  <li>NPM, <b>React</b> Basics, Project Architecture, States;</li>
                  <li>Life cycle of React components, AJAX requests, Firebase, SPA applications, multi-page applications;</li>
                  <li>Global application state, Redux-thunk, React-hooks, React-router, <b>RTK Query</b>;</li>
                  <li><b>React Native</b> Basics, Database Theory, <b>SQL</b>, <b>PostgreSQL</b>;</li>
                  <li>Experience with server-side development. HTTP protocol, <b>Node.js</b>, <b>NestJS</b>, <b>express</b>, <b>REST API</b>, CORS;</li>
                  <li><b>MongoDB</b>, Mongoose, <b>SQLite</b>, <b>Prisma ORM</b>,Registration and Authentication;</li>
                  <li>SOLID, Basic skills in writing BASH scripts, Express middleware, JWT tokens;</li>
                </>
                : 
                <>
                  <li>Les bases du développement web, HTML et CSS, Flexbox, animation CSS;</li>
                  <li>Intégration avancée, Adaptabilité, Méthodologie BEM, Transformations, SASS, Grid layout, Utilisation de Figma, Bootstrap;</li>      
                  <li>Introduction à <b>Javascript</b>, Algorithmes, Tableaux, Boucles, Fonctions, Objets et leurs méthodes, Itérateurs et générateurs;</li>
                  <li>Expérience avec <b>Git</b>, travail sur <b>GitHub</b> et <b>GitLab</b>, branches, tickets, demandes de fusion, conflits et résolutions, Bases de la création et de la fusion de branches;</li>          
                  <li>Utilisation de JS avec les éléments de la page web, jQuery, Plugins, Local storage, Asynchronie, Requêtes Ajax;</li>
                  <li>Fetch, Promesses, Fermetures, Gestion des erreurs, Portées;</li>
                  <li><b>Typescript</b>, Programmation orientée objet <b>(POO)</b>, Inheritance, Interfaces, Generics;</li>
                  <li>NPM, Fondamentaux de <b>React</b>, Architecture du projet, État;</li>
                  <li>Cycle de vie des composants React, Requêtes AJAX, Firebase, Applications SPA, Applications à plusieurs pages;</li>
                  <li>État global de l'application, Redux-thunk, Hooks React, React-router, <b>RTK Query;</b></li>
                  <li><b>React Native</b> Basics, Théorie des bases de données, <b>SQL</b>, <b>PostgreSQL</b>;</li>
                  <li>Expérience avec le développement côté serveur, Protocole HTTP, <b>Node.js</b>, <b>express</b>, <b>REST API</b>, CORS;</li>
                  <li><b>MongoDB</b>, Mongoose, Enregistrement et Authentification;"</li>
                  <li>SOLID, Compétences de base dans l'écriture de scripts BASH, Middleware Express, Jetons JWT;</li>
                </>
            }
            </ul>
            
        </div>
    );
};

export default AboutMe;