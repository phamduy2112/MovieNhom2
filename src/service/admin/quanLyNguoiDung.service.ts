import { GROUP_ID } from "../../constants";
import { axiosWithoutAuth } from "../aios.config";

export const LayDanhSachNguoiDung = async (keyword:string) => {
    try {
        if(keyword){
            const resp = await axiosWithoutAuth(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00&tuKhoa=${keyword}`)
            return resp.data
        }else{
            const resp = await axiosWithoutAuth(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00`)
            return resp.data
        }
    } catch (e: any) {
        throw new Error(e);
    }
};

