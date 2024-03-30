import { TProduct, TProductAPI } from "../../../../../service/Product/Product.type";

export const converToProduct=(list:TProductAPI[]):TProduct[]=>{
    return list.map((itemMovies)=>{
        return {
            maPhim: itemMovies.maPhim,
            tenPhim: itemMovies.tenPhim,
            trailer: itemMovies.trailer,
            hinhAnh: itemMovies.hinhAnh,
            ngayKhoiChieu: itemMovies.ngayKhoiChieu,
            hot: itemMovies.hot,
            dangChieu: itemMovies.dangChieu,
            sapChieu: itemMovies.sapChieu,
        }
    })


}