import { axiosWithoutAuth } from "../aios.config";

export const taoLichChieu = (payload: any) => {
    return axiosWithoutAuth("QuanLyDatVe/TaoLichChieu", {
        method: "post",
        data: payload,
    });
};
