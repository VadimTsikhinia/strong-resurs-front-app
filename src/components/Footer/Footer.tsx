import React from 'react';
import style from "./Footer.module.css";
import {NavLink} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.logo}></div>
            <Navbar/>
        </footer>
    );
};
