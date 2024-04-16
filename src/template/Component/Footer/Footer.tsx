import S from './Footer.module.css'
import { FaFacebookF,FaTiktok,FaInstagram  } from "react-icons/fa";

export function Footer(){

    return(
        <footer className={`${S.footer}`}>
    
            <div className="container">
               <div className="footer_top flex justify-between">
                <div className={`${S.footer_item}`}>
                    <h3>Giới thiệu</h3>
                    <a href="">Về Chúng Tôi</a>
                    <a href="">Thoả Thuận Sử Dụng

</a>
                    <a href="">Quy Chế Hoạt Động </a>
                    <a href="">Chính Sách Bảo Mật

</a>
                </div>
                <div className={`${S.footer_item}`}>
                    <h3>Góc điện ảnh

</h3>
                    <a href="">Thể Loại Phim</a>
                    <a href="">Bình Luận Phim 

</a>
                    <a href="">Blog Điện Ảnh </a>
                    <a href="">Phim Hay Tháng

</a>
                </div>
                <div className={`${S.footer_item}`}>
                    <h3>Hỗ trợ</h3>
                    <a href="">Góp Ý</a>
                    <a href="">Sale & Services

</a>
                    <a href=""> Rạp / Giá Vé </a>
                    <a href="">Tuyển Dụng FAQ

</a>
                </div>
                <div className={`${S.footer_item}`}>
                    <h3>Liên hệ chúng tôi qua</h3>
                    <div className="socials flex gap-6 mb-4">
                        <div className={`${S.icon_item}`}>
<FaFacebookF className={`${S.item}`}/>
                        </div>
                        <div className={`${S.icon_item}`}> 
                         <FaTiktok className={`${S.item}`}/>
                        </div>
                        <div className={`${S.icon_item}`}> 
                         <FaInstagram className={`${S.item}`}/>
                        </div>
                 
                    </div>
                    

                    <img style={{width:'120px'}} src="https://www.galaxycine.vn/_next/static/media/glx_trade.61f6c35c.png" alt="" />                    

                </div>
            </div>  
                <div className={`${S.footer_bottom}`}>
                    Được Thiết Kế Bởi ...
                </div>
            </div>
           

        </footer>
    )
}