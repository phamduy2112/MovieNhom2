import { tiketRoom, tiketRoomAPI } from "../../../service/TicketRoom/tiket.type";

export const converToTiketRoom=(list:tiketRoomAPI[]):tiketRoom[]=>{
   
        return {
            thongTinPhim:list.thongTinPhim,
            danhSachGhe:list.danhSachGhe.map((item)=>{
                return {
                    maGhe:item.maGhe,
                    tenGhe:item.tenGhe,
                    loaiGhe:item.loaiGhe,
                    daDat:item.daDat,
                    giaVe:item.giaVe,

                }
            })
        }

}