import React from 'react';
import {SectionTransparent} from "../SectionTransparent/SectionTransparent";
import {SectionCards} from "../SectionCards/SectionCards";
import {SectionContentbox} from "../SectionContentbox/SectionContentbox";


export const Home = () => {
    return (
        <>
            <div className="arrow animated bounce"></div>
            {/*<Header/>*/}
            <SectionTransparent/>
            <SectionCards/>
            <SectionCards/>
            <SectionContentbox/>
            <SectionContentbox/>
        </>
    );
};

