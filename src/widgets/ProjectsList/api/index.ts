import {AxiosResponse} from "axios";
import {Response} from "entities/response/response";
import {$api} from "shared/api";
import {ApiRoutes} from "shared/api/api-routes/ApiRoutes";
import {ProjectData} from "../../../entities/project/project";

export default class ProjectApi {
    static async getProjects(controller: AbortController): Promise<AxiosResponse<Response<ProjectData>>> {
        return $api.get<Response<ProjectData>>(ApiRoutes.PROJECTS, {signal: controller.signal});
    }
}
