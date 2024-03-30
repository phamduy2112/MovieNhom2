import axios from "axios";
import { BASE_URL } from "../constants";
import { tokenCybersoft } from '../constants/index';

export const axiosWithoutAuth=axios.create({
    baseURL:`${BASE_URL}/api/`,
    timeout:180_000,
})
axiosWithoutAuth.interceptors.request.use(
    (config)=>{
        config.headers.TokenCybersoft =tokenCybersoft
        return config
    },
    (e)=>{
        return Promise.reject(e)
    }
)