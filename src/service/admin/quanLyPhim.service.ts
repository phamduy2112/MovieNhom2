import { axiosWithoutAuth } from "../aios.config";

export const themPhimUpLoadHinh = (payload: FormData) => {
    return axiosWithoutAuth("/QuanLyPhim/ThemPhimUploadHinh", {
        method: "post",
        data: payload,
    });
};

export const layThongTinPhim = async (maPhim: string) => {
    try {
        const resp = await axiosWithoutAuth(
            `QuanLyPhim/LayThongTinPhim/?Maphim=${maPhim}`,
        );
        const data = resp.data;
        console.log("service");
        return data;
    } catch (e: any) {
        throw new Error(e);
    }
};

export const updateFilm = (payload: FormData) => {
    return axiosWithoutAuth("/QuanLyPhim/CapNhatPhimUpload", {
        method: "post",
        data: payload,
    });
};

export const deleteFilm = (maPhim:string|number) => {
    return axiosWithoutAuth(`/QuanLyPhim/XoaPhim/?MaPhim=${maPhim}`,{
        method: 'delete',
    })
}