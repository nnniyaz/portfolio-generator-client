import LogApi from "shared/api/logApi";

export const log = (log: any): void => {
    LogApi.log(log);
}
