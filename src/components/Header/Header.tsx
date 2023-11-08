import React from 'react';
import style from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <div className={style.logo}></div>
            <nav>
                <ul>
                    <li>Главная</li>
                    <li>Каталог</li>
                    <li>Контакты</li>
                </ul>
            </nav>
        </header>
    );
};
