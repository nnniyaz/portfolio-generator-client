import React from "react";
import {txt} from "shared/assets/txt/txt";
import {styles} from "shared/assets/styles/styles";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import {ProjectsList} from "../../../widgets/ProjectsList";
import classes from "./Projects.module.scss";

export function Projects() {
    const {currentLang} = useTypedSelector(state => state.system);

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.container__header}>
                    <div className={styles.heading}>{txt.projects[currentLang]}</div>
                    <div className={styles.paragraph}>{txt.projects_text[currentLang]}</div>
                </div>

                <ProjectsList/>
            </div>
        </div>
    );
}
