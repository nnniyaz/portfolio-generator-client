import {AxiosResponse} from "axios";
import {$api, Response} from "./index";
import {ApiRoutes} from "./api-routes/ApiRoutes";
import {Profile} from "../../src/entities/profile";

export default class ProfileApi {
    static async getProfile(controller: AbortController): Promise<AxiosResponse<Response<Profile>>> {
        return $api.get<Response<Profile>>(ApiRoutes.PROFILE, {signal: controller.signal});
    }
}
