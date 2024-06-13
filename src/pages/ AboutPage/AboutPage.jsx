import React from 'react';
import Description from "../../ components/Description/Description";
import userName from "./about.module.css"

function AboutPage(props) {
    return (
        <div className={userName.blockOne}>
            <Description info={{title: "Title 2", description: "description 2"}}/>
        </div>
    );
}

export default AboutPage;