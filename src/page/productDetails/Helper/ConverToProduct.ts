import { TContent, TContentAPI, THeThongRapChieu, THeThongRapChieuAPI, TLichChieu, TLichChieuAPI } from "../../../service/DetailProdudct/DetailProduct.type"
import { TProduct, TProductAPI } from "../../../service/Product/Product.type"

export const converToDetailProduct=(list:TProductAPI):TProduct=>{
   
        return {
            maPhim: list.maPhim,
            tenPhim: list.tenPhim,
            trailer: list.trailer,
            hinhAnh: list.hinhAnh,
            ngayKhoiChieu: list.ngayKhoiChieu,
            hot: list.hot,
            dangChieu: list.dangChieu,
            sapChieu: list.sapChieu,
        }
   


}
export const converToTheaterDetailProduct=(list:TLichChieuAPI[]):TLichChieu[]=>{
   

      
       
                return {
           
                    
                    heThongRapChieu:list.heThongRapChieu.map((item)=>{
                        return {
                            cumRapChieu:item.cumRapChieu.map((item)=>{
                            
                                return {
                                    lichChieuPhim:item.lichChieuPhim.map((item)=>{
                                        
                                        return {
                                            ngayChieuGioChieu:item.ngayChieuGioChieu,
                                            thoiLuong:item.thoiLuong,
                                            
                                        }
                                    }),
                                    maCumRap:item.maCumRap,
                                    diaChi:item.diaChi,
                                    tenCumRap:item.tenCumRap,
                                    hinhAnh:item.hinhAnh,
                                }
                            }),
                            tenHeThongRap:item.tenHeThongRap,
                            maHeThongRap:item.maHeThongRap,
                            logo:item.logo,
                      
                        }
                    }),
                    tenPhim:list.tenPhim,
                    hinhAnh:list.hinhAnh,
                    ngayKhoiChieu:list.ngayKhoiChieu,
                    moTa:list.moTa,
              
          
                }
                
 

   


}