import React from 'react';
import style from "./SectionCards.module.css";
import {Card} from "./Card/Card";

export const SectionCards = () => {
    return (
        <section className={style.cards}>
            <Card/>
            <Card/>
            <Card/>
        </section>
    );
};

