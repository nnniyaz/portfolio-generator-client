import {AxiosResponse} from "axios";
import {Response} from "../models/response/response";
import {$api} from "./index";
import {ApiRoutes} from "./api-routes/ApiRoutes";
import {Profile} from "../models/profile";

export default class ProfileApi {
    static async getProfile(controller: AbortController): Promise<AxiosResponse<Response<Profile>>> {
        return $api.get<Response<Profile>>(ApiRoutes.PROFILE, {signal: controller.signal});
    }
}
