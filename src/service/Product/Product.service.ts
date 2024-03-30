import { axiosWithoutAuth } from "../aios.config"

export const getProduct=async()=>{
    try{
        const resp=await axiosWithoutAuth('QuanLyPhim/LayDanhSachPhim?maNhom=GP04');
        const data=resp.data;
        return data
    }catch(e){
        throw new Error(e);
    }
}