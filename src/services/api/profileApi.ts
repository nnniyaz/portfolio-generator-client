import {AxiosResponse} from "axios";
import {IResponse} from "../models/IResponse";
import {$api} from "./index";
import {ApiRoutes} from "./api-routes/ApiRoutes";
import {IProfile} from "../models/IProfile";

export default class ProfileApi {
    static async getProfile(controller: AbortController): Promise<AxiosResponse<IResponse<IProfile>>> {
        return $api.get<IResponse<IProfile>>(ApiRoutes.PROFILE, {signal: controller.signal});
    }
}
