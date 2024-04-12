import { axiosWithoutAuth } from "../aios.config";

export const getIconTheater=async()=>{
    try{
        const resp=await axiosWithoutAuth('QuanLyRap/LayThongTinHeThongRap')
        const data=resp.data;
        return data
    }catch(e){
        throw new Error(e);
    }
}