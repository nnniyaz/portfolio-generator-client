import {ProjectsAction, ProjectsActionsEnum, ProjectState} from "./types";

const initialState: ProjectState = {
    projects: [],
    projectsCount: 0,
    isLoadingGetProjects: false
}

export default function ProjectsReducer (state: ProjectState = initialState, action: ProjectsAction): ProjectState {
    switch (action.type) {
        case ProjectsActionsEnum.SET_PROJECTS:
            return {...state, projects: action.payload};
        case ProjectsActionsEnum.SET_PROJECTS_COUNT:
            return {...state, projectsCount: action.payload}
        case ProjectsActionsEnum.SET_IS_LOADING_GET_PROJECTS:
            return {...state, isLoadingGetProjects: action.payload};
        default:
            return state;
    }
}
