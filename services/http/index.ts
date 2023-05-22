import axios from "axios";
import {MlString} from "../../src/entities/base/mlString";

export interface Response<T> {
    success: boolean;
    message: MlString;
    data?: T;
}

export const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URI || "",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",

    },
});

export const $apiFormData = axios.create({
    baseURL: process.env.REACT_APP_API_URI || "",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    }
});
