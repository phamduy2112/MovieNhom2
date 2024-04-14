import { useEffect, useState } from "react";
import { getProfile } from "../../service";
import { getLocalStorage } from "../../utils";
import { ACCESS_TOKEN } from "../../constants";
import {useNavigate } from "react-router-dom";

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
        <div className="my-[100px]">
            <p>
                Email: <span>{profile.email}</span>
            </p>
            <p>
                Họ tên: <span>{profile.hoTen}</span>
            </p>
            <p>
                Loại người dùng: <span>{profile.maLoaiNguoiDung}</span>
            </p>
            <p>
                Mật khẩu: <span>{profile.matKhau}</span>
            </p>
            <p>
               Số điện thoại: <span>{profile.soDT}</span>
            </p>
            <p>
                Tên Tài Khoản: <span>{profile.taiKhoan}</span>
            </p>
            <p>
                Thông tin đặt vé: <span>{profile.thongTinDatVe.length ? profile.thongTinDatVe : 'Bạn hãy đặt vé!' }</span>
            </p>
        </div>
    );  
};
