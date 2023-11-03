import React from 'react';
import style from "./SectionContentbox.module.css";

export const SectionContentbox = () => {
    return (
        <section className={style.contentbox}>
            <div className={style.headline}></div>
            <div className={style.text}></div>
            <div className={style.text}></div>
            <div className={style.text}></div>
            <div className={style.button}></div>
        </section>
    );
};

