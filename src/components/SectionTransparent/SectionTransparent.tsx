import React from 'react';
import style from "./SectionTransparent.module.css";

export const SectionTransparent = () => {
    return (
        <section className={style.transparent}>
            <div className={style.headline}></div>
            <div className={style.text}></div>
            <div className={style.text}></div>
            <div className={style.button}></div>
        </section>
    );
};
