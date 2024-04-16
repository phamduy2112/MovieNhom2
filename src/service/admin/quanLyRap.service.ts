import { axiosWithoutAuth } from "../aios.config";

export const layThongTinHeThongRap = async () => {
    try {
        const resp = await axiosWithoutAuth(`QuanLyRap/LayThongTinHeThongRap`);
        const data = resp.data;
        console.log("service");
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
};

export const layThongTinCumRap = async (maHeThongRap:string) => {
    try {
        const resp = await axiosWithoutAuth(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
        const data = resp.data;
        console.log("service");
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
};

