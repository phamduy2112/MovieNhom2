import { axiosWithoutAuth } from "../aios.config"

export const getProduct= async(tenPhim:string)=>{
    try{
        if(tenPhim){
            const resp=await axiosWithoutAuth(`QuanLyPhim/LayDanhSachPhim?maNhom=GP04&tenPhim=${tenPhim}`);
            return resp.data
        }else{   
            const resp=await axiosWithoutAuth('QuanLyPhim/LayDanhSachPhim?maNhom=GP04');
            return resp.data
        }
    }catch(e:any){
        throw new Error(e);
    }
}
