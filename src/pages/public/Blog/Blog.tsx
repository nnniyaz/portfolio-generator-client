import React from "react";
import {txt} from "shared/assets/txt/txt";
import {styles} from "shared/assets/styles/styles";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import classes from "./Blog.module.scss";

export function Blog() {
    const {currentLang} = useTypedSelector(state => state.system);

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.container__header}>
                    <div className={classes.container__header__title}>
                        <div className={styles.heading}>{txt.blog[currentLang]}</div>
                    </div>
                    <div className={classes.head}></div>
                    <div className={styles.paragraph}>{txt.blog_text[currentLang]}</div>
                </div>


            </div>
        </div>
    );
}
