import React from 'react';
import style from "./Card.module.css";

export const Card = () => {
    return (
        <div className={style.card}>
            {/*<img src="https://imgplaceholder.com/500x300/transparent/ddd/ion-image" alt="">*/}
            <div className={style.content}>
                <div className={style.headline}></div>
                <div className={style.text}></div>
                <div className={style.text}></div>
                <div className={style.button}></div>
            </div>
        </div>
    );
};

