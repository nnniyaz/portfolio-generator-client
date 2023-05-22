import LogApi from "../api/logApi";

export const log = (log: any): void => {
    LogApi.log(log);
}
