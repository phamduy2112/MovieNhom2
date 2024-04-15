import { TIconTheater, TIconTheaterAPI } from "../../../../../service/Theater/icon.Theater";

export const converToIconTheater=(list:TIconTheaterAPI[]):TIconTheater[]=>{
    return list.map((itemIcon)=>{
        return {
            maHeThongRap: itemIcon.maHeThongRap,
    tenHeThongRap: itemIcon.tenHeThongRap,
  
    logo: itemIcon.logo,
        }
    })
}