import LogApi from "../services/http/logApi";

export const log = (log: any): void => {
    LogApi.log(log);
}
