import React from 'react';
import style from './App.module.css'
import {Header} from "./components/Header/Header";
import {SectionCards} from "./components/SectionCards/SectionCards";
import {SectionTransparent} from "./components/SectionTransparent/SectionTransparent";
import {SectionContentbox} from "./components/SectionContentbox/SectionContentbox";
import {Footer} from "./components/Footer/Footer";


function App() {
    return (
        <>
            <Header/>
            <div className={style.wrapper}>
                <div className={style.wrap}>
                    <div className="arrow animated bounce"></div>
                    {/*<Header/>*/}
                    <SectionTransparent/>
                    <SectionCards/>
                    <SectionCards/>
                    <SectionContentbox/>
                    <SectionContentbox/>
                </div>
            </div>
            <Footer/>
        </>
);
}

export default App;
