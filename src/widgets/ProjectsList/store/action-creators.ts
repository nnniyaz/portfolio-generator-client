import {ProjectsActionsEnum, SetIsLoadingGetProjectsAction, SetProjectsAction, SetProjectsCount,} from "./types";
import {Project} from "entities/project/project";
import {AppDispatch} from "app/store";
import ProjectApi from "../api";
import {isEmpty} from "lodash";
import {log} from "shared/lib/utils/log";

export const ProjectsActionCreators = {
    setProjects: (payload: Project[]): SetProjectsAction => ({
        type: ProjectsActionsEnum.SET_PROJECTS,
        payload: payload,
    }),
    setProjectsCount: (payload: number): SetProjectsCount => ({
        type: ProjectsActionsEnum.SET_PROJECTS_COUNT,
        payload: payload,
    }),
    setIsLoadingGetProjects: (payload: boolean): SetIsLoadingGetProjectsAction => ({
        type: ProjectsActionsEnum.SET_IS_LOADING_GET_PROJECTS,
        payload: payload,
    }),

    getProjects: (controller: AbortController) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ProjectsActionCreators.setIsLoadingGetProjects(true));
            const res = await ProjectApi.getProjects(controller);

            if (res.data.success) {
                const projectData = res.data.data;

                if (isEmpty(projectData)) {
                    return;
                }

                dispatch(ProjectsActionCreators.setProjects(projectData.projects));
                dispatch(ProjectsActionCreators.setProjectsCount(projectData.projectsCount));
            }
        } catch (e) {
            log(e);
        } finally {
            dispatch(ProjectsActionCreators.setIsLoadingGetProjects(false));
        }
    }
}
