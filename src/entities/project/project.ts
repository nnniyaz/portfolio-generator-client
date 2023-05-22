import {MlString} from "../base/mlString";

export type ProjectData = {
    projectsCount: number;
    projects: Project[];
}

export type ProjectPreviewImageUrl = string;
export type Project = {
    id: UniqueId;
    previewImageUrl: ProjectPreviewImageUrl;
    title: MlString;
    description: MlString;
    createdAt: Date;
    updatedAt: Date;
}
