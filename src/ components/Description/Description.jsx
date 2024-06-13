import React from 'react';
import foin from "./discription.module.css"

function Description(props) {
    return (
        <div className={foin.blockFont}>
            <h2>{props.info.title}</h2>
            <p>{props.info.description}</p>
        </div>
    );
}

export default Description;