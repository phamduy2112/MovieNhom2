import { axiosWithoutAuth } from "../aios.config";


export const getListInforTheater=async(name='BHDStar')=>{
    try{
        const resp=await axiosWithoutAuth(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${name}`)
        const data=resp.data;
        return data
    }catch(e){
        console.log(e);
        
    }
}