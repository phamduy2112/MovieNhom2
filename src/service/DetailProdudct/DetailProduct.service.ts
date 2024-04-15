import { axiosWithoutAuth } from "../aios.config";

export const getDetailTheaterProduct=async(idProduct:string='')=>{
    try{
        const resp=await axiosWithoutAuth(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idProduct}`);
        const data=resp.data;
        return data
    }catch(e){
        console.log(e);
        
    }
}