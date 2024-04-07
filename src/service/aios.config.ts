import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../constants";
import { tokenCybersoft } from '../constants/index';
import { getLocalStorage } from "../utils";

export const axiosWithoutAuth=axios.create({
    baseURL:`${BASE_URL}/api/`,
    timeout:180_000,
})
axiosWithoutAuth.interceptors.request.use(
    (config)=>{
        config.headers.TokenCybersoft =tokenCybersoft;
        config.headers.Authorization = `Bearer ${getLocalStorage(ACCESS_TOKEN)}`;
        return config
    },
    (e)=>{
        return Promise.reject(e)
    }
)