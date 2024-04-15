import { showTimes, showTimesAPI } from "../../../../../service/Theater/ShowTimes.type"

export const ConverToShowTimesTheater=(list:showTimesAPI[]):showTimes[]=>{
    return list.map((item)=>{
      return {
       lstCumRap:item.lstCumRap.map((item)=>{
        return {
            danhSachPhim: item.danhSachPhim.map((item)=>{
                return {
                    lstLichChieuTheoPhim: item.lstLichChieuTheoPhim.map((item)=>{
                        return {
                            ngayChieuGioChieu:item.ngayChieuGioChieu,
                        }
                    }),
                    maPhim: item.maPhim,
                    tenPhim: item.tenPhim,
                    hinhAnh: item.hinhAnh,
                }
            }),
            maCumRap: item.maCumRap,
            tenCumRap: item.tenCumRap,
            hinhAnh: item.hinhAnh,
            diaChi: item.diaChi,
        }
       }),

        maHeThongRap: item.maHeThongRap,
        tenHeThongRap: item.tenHeThongRap,
        logo: item.logo,
        mahom: item.mahom, 
      }  
    })
}