import { axiosWithoutAuth } from "../aios.config";

export const getShowTimesTheater=async(heThongRap:string,maNhomPhim:string='GP04')=>{
    try{
        
        const resp=await axiosWithoutAuth(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${heThongRap}&maNhom=${maNhomPhim}`);

        const data=resp.data;
        return data
    }catch(e:any){
        throw new Error(e);
    }
}