import React from 'react';
import Button from "../../../../util/button/button";
import styles from "./hero.module.css"

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.welcome}>
                Welcome
            </div>
            <Button
                url="/objects/create"
                label="Create"
            />
        </div>
    );
}

export default Hero;