import React from 'react';
import style from './App.module.css'
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Home} from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";
import {Contacts} from "./components/Contacts/Contacts";

function App() {
    return (
        <>
            <Header/>
            <div className={style.wrapper}>
                <div className={style.wrap}>

                    <Routes>
                        <Route path={'/strong-resurs-front-app/'} element={<Home/>}/>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/home'} element={<Home/>}/>
                        <Route path={'/catalog'} element={<Catalog/>}/>
                        <Route path={'/contacts'} element={<Contacts/>}/>
                    </Routes>

                </div>
            </div>
            <Footer/>
        </>
);
}

export default App;
