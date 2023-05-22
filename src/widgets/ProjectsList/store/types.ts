import {Project} from "entities/project/project";

export interface ProjectState {
    projects: Project[];
    projectsCount: number;
    isLoadingGetProjects: boolean;
}

export enum ProjectsActionsEnum {
    SET_PROJECTS = "SET_PROJECTS",
    SET_PROJECTS_COUNT = "SET_PROJECTS_COUNT",
    SET_IS_LOADING_GET_PROJECTS = "SET_IS_LOADING_GET_PROJECTS",
}

export interface SetProjectsAction {
    type: ProjectsActionsEnum.SET_PROJECTS;
    payload: Project[];
}

export interface SetProjectsCount {
    type: ProjectsActionsEnum.SET_PROJECTS_COUNT;
    payload: number;
}

export interface SetIsLoadingGetProjectsAction {
    type: ProjectsActionsEnum.SET_IS_LOADING_GET_PROJECTS;
    payload: boolean;
}

export type ProjectsAction =
    SetProjectsAction |
    SetProjectsCount |
    SetIsLoadingGetProjectsAction;
