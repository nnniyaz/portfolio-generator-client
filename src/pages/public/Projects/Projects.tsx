import React from "react";
import {styles} from "shared/assets/styles/styles";
import {txt} from "shared/assets/txt/txt";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import classes from "./Projects.module.scss";

export function Projects() {
    const {currentLang} = useTypedSelector(state => state.system);
    const {} = useTypedSelector(state => state);

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.container__header}>
                    <div className={styles.heading}>{txt.projects[currentLang]}</div>
                    <div className={styles.paragraph}>{txt.projects_text[currentLang]}</div>
                </div>

                <div className={classes.container__body}>

                </div>
            </div>
        </div>
    );
}
