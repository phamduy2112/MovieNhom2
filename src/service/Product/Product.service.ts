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
export const getDetailProduct=async(idProduct:string='')=>{
    try{
        const resp=await axiosWithoutAuth(`QuanLyPhim/LayThongTinPhim?MaPhim=${idProduct}`);
        const data=resp.data;
        return data
    }catch(e){
        throw new Error(e);
    }
}
