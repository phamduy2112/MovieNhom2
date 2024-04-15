import { axiosWithoutAuth } from "../aios.config";

export const getMovies=async()=>{
    try{
        const resp=await axiosWithoutAuth('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04');
        const data=resp.data;
        return data
    }catch(e){
        console.log(e);
        
    }
}