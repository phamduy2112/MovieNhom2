import React from "react";
import { Input } from "../../template/Component/Input/Input";
import { NavLink } from "react-router-dom";
import { SButtonPrimary } from "../../template/Component/Style/Button";
import S from "./userLR.module.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

//Validate-devCuong
import * as Yup from "yup";
import { useFormik } from "formik";
import { useFormikHook } from "../../Hooks/useFormikHook";

export default function Login() {
    const [{ touched, errors }, { handleSubmit, getFieldProps }] =
        useFormikHook();

    console.log({ errors });
    return (
        <div className={`${S.login}`}>
            <h3 className="text-center">Đăng nhập</h3>
            <p className="text-center">Chào mừng bạn trở lại</p>
            <form onSubmit={handleSubmit}>
                {/* Kiểm tra xem getFieldProps có tồn tại trước khi truy cập */}
                {getFieldProps && (
                    <>
                        <Input
                            type="text"
                            {...getFieldProps("taiKhoan")}
                            label={"Tài Khoản"}
                            touched={touched?.taiKhoan}
                            errors={errors?.taiKhoan}
                        />

                        <Input
                            type="password"
                            {...getFieldProps("password")}
                            label={"Mật Khẩu"}
                            touched={touched?.password}
                            errors={errors?.password}
                        />
                    </>
                )}

                <NavLink to={""} className="mb-4 block text-right">
                    Quên mật khẩu?
                </NavLink>

                <SButtonPrimary
                    width={"100%"}
                    height={40}
                    borderRadius={2}
                    type="submit"
                >
                    Đăng nhập ngay
                </SButtonPrimary>
            </form>
            <h5 className="my-5 text-center">OR</h5>
            <div className="flex gap-6">
                <SButtonPrimary
                    width={"50%"}
                    height={40}
                    borderRadius={1}
                    background="blue"
                >
                    <div className="flex content-center justify-center gap-3 text-center">
                        <FaFacebookF className="self-center" />
                        Đăng nhập facebook
                    </div>
                </SButtonPrimary>
                <SButtonPrimary
                    width={"50%"}
                    height={40}
                    borderRadius={1}
                    background="orange"
                >
                    <div className="flex content-center justify-center gap-3 text-center">
                        <FaGoogle className=" self-center" />
                        Đăng nhập google
                    </div>
                </SButtonPrimary>
            </div>

            <h4 className="mt-4 text-center">
                Bạn chưa có tài khoản ?
                <NavLink to={"/register"}>Đăng kí</NavLink>
            </h4>
        </div>
    );
}
