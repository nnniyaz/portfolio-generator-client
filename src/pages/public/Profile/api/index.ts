import {AxiosResponse} from "axios";
import {Response} from "../../../../entities/response/response";
import {Profile} from "../../../../entities/profile/profile";
import {$api} from "../../../../shared/api";
import {ApiRoutes} from "../../../../shared/api/api-routes/ApiRoutes";

export default class ProfileApi {
    static async getProfile(controller: AbortController): Promise<AxiosResponse<Response<Profile>>> {
        return $api.get<Response<Profile>>(ApiRoutes.PROFILE, {signal: controller.signal});
    }
}
