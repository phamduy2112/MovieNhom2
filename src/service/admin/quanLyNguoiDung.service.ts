import { GROUP_ID } from "../../constants";
import { axiosWithoutAuth } from "../aios.config";

export const LayDanhSachNguoiDung = async (keyword:string) => {
    try {
        if(keyword){
            const resp = await axiosWithoutAuth(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${keyword}`)
            return resp.data
        }else{
            const resp = await axiosWithoutAuth(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
            return resp.data
        }
    } catch (e: any) {
        throw new Error(e);
    }
};

export const layDanhSachLoaiNguoiDung = async () =>{
    try {
        const resp = await axiosWithoutAuth(
            `QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
        );
        const data = resp.data;
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
}

export const themNguoiDung = async(payload:any) =>{
    return axiosWithoutAuth('QuanLyNguoiDung/ThemNguoiDung',{
        method: 'post',
        data: payload,
    })
}

export const XoaNguoiDung = (taiKhoan:string) => {
    return axiosWithoutAuth(`QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`,{
        method: 'delete',
    })
}



export const layThongTinUser = (payload: string) => {
    return axiosWithoutAuth(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${payload}`, {
        method: "post",
    });
};

export const capNhatUser = (payload:any) => {
    return axiosWithoutAuth(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, {
        method: "put",
        data: payload,
    });
}