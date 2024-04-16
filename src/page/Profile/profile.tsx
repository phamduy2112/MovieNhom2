import { useEffect, useState } from "react";
import { getProfile } from "../../service";
import { getLocalStorage } from "../../utils";
import { ACCESS_TOKEN } from "../../constants";
import {useNavigate } from "react-router-dom";
import { Input } from "../../template/Component/Input/Input";
import { Information, InformationBox__bottom_li, InformationBox__left, InformationBox__leftImg, InformationBox__right, InformationBox__right_p, SButtonSecond } from "./Profile.type";
import { SButtonPrimary } from "../../template/Component/Style/Button";

type Props = {};

export const Profile = (props: Props) => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        email: "",
        hoTen: "",
        maLoaiNguoiDung: "",
        matKhau: "",
        soDT: "",
        taiKhoan: "",
        thongTinDatVe: [],
    });

    console.log(profile);

    useEffect(() => {
        if (!getLocalStorage(ACCESS_TOKEN)) {
            // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
            navigate("/login");
        }

        getProfile()
            .then((r) => setProfile(r.data.content))
            .catch(console.log);
    }, []);

    return (
        <div className="mt-28">
    <div className="container text-black">
    <Information>
  <div className="information-box flex gap-5">
    <InformationBox__left>
      <div className="information-box__top flex px-4 py-2 gap-3" style={{borderBottom:'1px solid rgba(0, 0, 0, 0.099)'}}>
        <InformationBox__leftImg src="https://i.pravatar.cc/?img=2" />
        <div className="information_item mt-3">
          <h3 className="text-3xl">{profile.hoTen}</h3>
          <button className="text-2xl">Đăng xuất</button>   
        </div>
     
      </div>
      <div className="information-box__bottom">
        <ul className="pl-0">
          <InformationBox__bottom_li><a >Thông tin chi tiết</a></InformationBox__bottom_li>
          <InformationBox__bottom_li><a >Lịch sử đặt vé</a></InformationBox__bottom_li>
          <InformationBox__bottom_li><a >Đăng xuất</a></InformationBox__bottom_li>
        </ul>
      </div>
    </InformationBox__left>
    <InformationBox__right>
      <div className="information-title text-center">
        <h3 className="text-4xl">Thông tin tài khoản</h3>
        (Có thể chính sửa tài khoản)
      </div>
      <div className="information-item">
        <h3 className="text-3xl text-black">Thông tin cá nhân</h3>
        <form >
        <Input label={'Họ Tên'} type={'email'} value={profile.hoTen} disabled></Input>
       <div className="flex gap-5">
        <div className="w-50">
        <Input label={'Tài Khoản'} type={'text'} value={profile.taiKhoan} disabled ></Input>

        </div>
        <div className="w-50">
        <Input label={'Mật Khẩu'} type={'password'} value={profile.matKhau} ></Input>

        </div>
       </div>
       <Input label={'Số Điện Thoại'} type={'number'} value={profile.soDT} disabled ></Input>
       <Input label={'Email'} type={'email'} value={profile.email} disabled></Input>
        
          <div className="flex justify-end gap-3">
            <SButtonSecond>Chỉnh sửa dữ liệu</SButtonSecond>   
            <SButtonSecond>Đổi mật khẩu</SButtonSecond>   
          </div>
        </form>
      </div>
    </InformationBox__right>
  </div>
</Information>

        </div>

        </div>
    
    );  
};
