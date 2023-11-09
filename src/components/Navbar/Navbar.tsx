import React from 'react';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={"/home"}>Главная</NavLink></li>
                <li><NavLink to={"/catalog"}>Каталог</NavLink></li>
                <li><NavLink to={"/contacts"}>Контакты</NavLink></li>
            </ul>
        </nav>
    );
};

