import React, {useState} from 'react';
import {txt} from "../../../../shared/assets/txt/txt";
import {styles} from "shared/assets/styles/styles";
import {Project} from "entities/project/project";
import {LangsList} from "entities/base/mlString";
import classes from "./ProjectCard.module.scss";
import {Link} from "react-router-dom";
import {isEmpty} from "lodash";

interface ProjectCardProps {
    project?: Project;
    currentLang?: LangsList;
}

export function ProjectCard({project, currentLang}: ProjectCardProps) {
    const [error, setError] = useState(false);

    const onImgError = ({currentTarget}: { currentTarget: EventTarget & HTMLImageElement }) => {
        currentTarget.onerror = null;
        setError(true);
    }

    if (isEmpty(project) || !currentLang) {
        return (
            <div className={classes.project}></div>
        )
    }

    return (
        <Link to={""} className={classes.project}>
            {
                error
                    ?
                    <div className={classes.project__preview}>
                        <div className={classes.project__preview__text}>
                            {txt.project[currentLang]}
                        </div>
                    </div>
                    :
                    <img
                        src={project.previewImageUrl}
                        onError={onImgError}
                        className={classes.project__preview}
                        alt={"project-preview"}
                    />
            }
            <div className={classes.project__title}>
                <div className={styles.subHeading}>
                    {project.title[currentLang]}
                </div>
            </div>
            <div className={classes.project__description}>
                <div className={styles.paragraph}>
                    {project.description[currentLang]}
                </div>
            </div>
        </Link>
    );
}
