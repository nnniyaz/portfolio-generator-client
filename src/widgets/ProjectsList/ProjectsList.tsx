import React, {useEffect} from "react";
import {useTypedSelector} from "shared/lib/hooks/useTypedSelector";
import {useActions} from "shared/lib/hooks/useActions";
import {Loading} from "shared/ui/Loading";
import {ProjectCard} from "entities/project/ui/ProjectCard";
import {EmptyData} from "shared/ui/EmptyData";
import classes from "./ProjectsList.module.scss";

export function ProjectsList() {
    const {currentLang} = useTypedSelector(state => state.system);
    const {projects, projectsCount, isLoadingGetProjects} = useTypedSelector(state => state.projects);
    const {getProjects} = useActions();

    const projectBlocks = Array.from(Array(projectsCount + (projectsCount % 4)).keys()).map((index) => {
        if (projectsCount <= index + 1) return <ProjectCard/>;
        return <ProjectCard project={projects[index]} currentLang={currentLang}/>;
    });

    useEffect(() => {
        const controller = new AbortController();
        getProjects(controller);
        return () => controller.abort();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={classes.projects}>
            {
                isLoadingGetProjects
                    ? <Loading height={"300px"}/>
                    : projectsCount === 0
                        ? <EmptyData/>
                        : projectBlocks.map(projectBlock => projectBlock)
            }
        </div>
    )
}
