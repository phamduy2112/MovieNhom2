import {
   
    TLichChieu,
    TLichChieuAPI,
} from "../../../service/DetailProdudct/DetailProduct.type";

// export const converToTheaterDetailProduct = (
//     list: TLichChieuAPI[],
// ): TLichChieu[] => {
//     console.log("check list: ",list);
//     return {
//         heThongRapChieu: list.heThongRapChieu.map((item) => {
//             return {
//                 cumRapChieu: item.cumRapChieu.map((item) => {
//                     return {
//                         lichChieuPhim: item.lichChieuPhim.map((item) => {
//                             return {
//                                 ngayChieuGioChieu: item.ngayChieuGioChieu,
//                                 thoiLuong: item.thoiLuong,
//                             };
//                         }),
//                         maCumRap: item.maCumRap,
//                         diaChi: item.diaChi,
//                         tenCumRap: item.tenCumRap,
//                         hinhAnh: item.hinhAnh,
//                     };
//                 }),
//                 tenHeThongRap: item.tenHeThongRap,
//                 maHeThongRap: item.maHeThongRap,
//                 logo: item.logo,
//             };
//         }),
//         tenPhim: list.tenPhim,
//         hinhAnh: list.hinhAnh,
//         ngayKhoiChieu: list.ngayKhoiChieu,
//         moTa: list.moTa,
//     };
// };


export const converToTheaterDetailProduct = (
    list: TLichChieuAPI[],
): TLichChieu[] => {
    console.log("check list: ",list);
    return {
        heThongRapChieu: list ? list : ["Da Nang"],
        tenPhim: list.tenPhim,
        hinhAnh: list.hinhAnh,
        ngayKhoiChieu: list.ngayKhoiChieu,
        moTa: list.moTa,
    };
};