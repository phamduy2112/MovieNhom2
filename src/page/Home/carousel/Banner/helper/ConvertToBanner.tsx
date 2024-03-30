import { TBanner, TBannerAPI } from "../../../../../service/Banner/banner.type";

export const converToBanner=(list:TBannerAPI[]):TBanner[]=>{
    return list.map((itemBanner)=>{
        return {
            maBanner: itemBanner.maBanner,
            maPhim: itemBanner.maPhim,
            hinhAnh: itemBanner.hinhAnh,
        }
    })
}