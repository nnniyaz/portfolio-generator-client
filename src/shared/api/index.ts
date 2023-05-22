import axios from "axios";

const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URI || "",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",

    },
});

const $apiFormData = axios.create({
    baseURL: process.env.REACT_APP_API_URI || "",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    }
});

export {$api, $apiFormData};
