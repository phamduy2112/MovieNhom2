import { GROUP_ID } from "../../constants";
import { axiosWithoutAuth } from "../aios.config";

export const LayDanhSachNguoiDung = async () => {
    try {
        const resp = await axiosWithoutAuth(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00`);
        const data = resp.data;
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
};