import { TListInfoTheater, TListInfoTheaterAPI } from "../../../../../service/Theater/Infor.type";
import { showTimes, showTimesAPI } from "../../../../../service/Theater/ShowTimes.type";

export const converToInfoTheater=(list:showTimesAPI[]):showTimes[]=>{
    return list.map((itemIcon)=>{
        return {
            lstCumRap:itemIcon.lstCumRap,    
            maHeThongRap:itemIcon.maHeThongRap,    
            tenHeThongRap:itemIcon.tenHeThongRap,    
            mahom:itemIcon.mahom,    
        }
    })

}