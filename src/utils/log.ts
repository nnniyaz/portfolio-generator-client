import LogApi from "../services/api/logApi";

export const log = (log: any): void => {
    LogApi.log(log);
}
