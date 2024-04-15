type TPayloadSignup = {
    taiKhoan: string,
    matKhau: string,
    email: string,
    soDt: string,
    hoTen: string,
    maNhom:string,
};

type TPayloadSignin = Pick<TPayloadSignup, "taiKhoan" | "matKhau">;