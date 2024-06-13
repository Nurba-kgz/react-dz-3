import React from 'react';
import Description from "../../ components/Description/Description";
import styles from "./mainpage.module.css"

function MainPage(props) {
    return (
        <div className={styles.block}>
            <Description info={{title: "Title", description: "description"}}/>
        </div>
    );
}

export default MainPage;