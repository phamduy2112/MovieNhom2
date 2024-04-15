// https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16262
import { axiosWithoutAuth } from "../aios.config";

export const getTiketRoom=async(MaLichChieu:string='16262')=>{
    try{
        
        const resp=await axiosWithoutAuth(`https://movienew.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MaLichChieu}`);

        const data=resp.data;
        return data
    }catch(e){
        throw new Error(e);
    }
}