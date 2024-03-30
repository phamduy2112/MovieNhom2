// QuanLyPhim/LayDanhSachBanner

import { axiosWithoutAuth } from "../aios.config";

export const getBanner=async ()=>{
    try{
        const resp=await axiosWithoutAuth('QuanLyPhim/LayDanhSachBanner');
        const data=resp.data;
        return data
    }catch(e){
        throw new Error(e);
    }
}