import {  MoviesAPI, movies } from "../../../../service/Movie/Movie.type"

export const ConventToMovies=(list:MoviesAPI[]):movies[] =>{
  return list.map((itemMovies)=>{
     return {
      lstCumRap:itemMovies.lstCumRap.map((item)=>{
        return {
          danhSachPhim:item.danhSachPhim.map((item)=>{
            return {
              lstLichChieuTheoPhim:item.lstLichChieuTheoPhim.slice(0,12).map((item)=>{
               return {
                maLichChieu:item.maLichChieu,
                ngayChieuGioChieu:item.ngayChieuGioChieu,
                tenRap:item.tenRap,
                giaVe:item.giaVe,

               }
              }),
              tenPhim:item.tenPhim,
              hinhAnh: item.hinhAnh,
              maPhim:item.maPhim,
              hot:item.hot,

            }
          })
        }
      }),

  }
  })
 
}


