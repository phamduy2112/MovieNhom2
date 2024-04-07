import { axiosWithoutAuth} from "../aios.config";

export const signup = (payload:TPayloadSignup) =>{
    return axiosWithoutAuth("/QuanLyNguoiDung/DangKy",{
        method: 'post',
        data: payload,
    })

}

export const signin = (payload:TPayloadSignin) =>{
    return axiosWithoutAuth('/QuanLyNguoiDung/DangNhap',{
        method: 'post',
        data: payload
    })
}

export const getProfile = () => {
    return axiosWithoutAuth("/QuanLyNguoiDung/ThongTinTaiKhoan",{
        method: "post",
    })
}