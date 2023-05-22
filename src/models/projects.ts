import {MlString} from "./base/mlString";

export type ProjectPreviewImageUrl = string;
export type Projects = {
    id: UniqueId;
    previewImageUrl: ProjectPreviewImageUrl;
    title: MlString;
    description: MlString;
    createdAt: Date;
    updatedAt: Date;
}
