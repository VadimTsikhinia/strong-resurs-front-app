import React from 'react';
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.logo}></div>
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>Каталог</li>
                    <li>Контакты</li>
                </ul>
            </nav>
        </footer>
    );
};
