import React from 'react';
import style from "./Header.module.css";
import {Navbar} from "../Navbar/Navbar";

export const Header = () => {
    return (
        <header>
            <div className={style.logo}></div>
            <Navbar/>
        </header>
    );
};
