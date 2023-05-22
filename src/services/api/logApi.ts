import {ApiRoutes} from "./api-routes/ApiRoutes";

export default class LogApi {
    static log(logMsg: string) {
        navigator.sendBeacon(ApiRoutes.LOG, JSON.stringify({log: logMsg}));
    }
}
