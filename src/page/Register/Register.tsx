import React from "react";
import { Input } from "../../template/Component/Input/Input";
import { NavLink } from "react-router-dom";
import { SButtonPrimary } from "../../template/Component/Style/Button";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import S from "./userLR.module.css";
import { useFormikHook } from "../../Hooks/useFormikHook";

export default function Register() {
    const [{ touched, errors}, { handleSubmit, getFieldProps }] =
        useFormikHook('signup');
    return (
        <div className={`${S.login}`}>
            <h3 className="text-center">Đăng Kí</h3>
            <p className="text-center">Hãy tham gia với chúng tôi</p>
            <form onSubmit={handleSubmit}>
                {getFieldProps && (
                    <>
                        <div className="flex justify-between gap-2">
                            <Input
                                label={"Họ Tên"}
                                type="text"
                                touched={touched?.hoTen}
                                errors={errors?.hoTen}
                                {...getFieldProps("hoTen")}
                            />

                            <Input
                                type="text"
                                {...getFieldProps("taiKhoan")}
                                label={"Tài Khoản"}
                                touched={touched?.taiKhoan}
                                errors={errors?.taiKhoan}
                            />
                        </div>

                        <Input
                            label={"Email"}
                            type="text"
                            {...getFieldProps("email")}
                            touched={touched?.email}
                            errors={errors?.email}
                        />
                        <Input
                            label={"Số Điện Thoại"}
                            type="number"
                            {...getFieldProps("sdt")}
                            touched={touched?.sdt}
                            errors={errors?.sdt}
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

                <SButtonPrimary
                    className="mt-4"
                    width={"100%"}
                    height={40}
                    border={2}
                    type="submit"
                >
                    Đăng kí ngay
                </SButtonPrimary>
            </form>
            <h5 className="my-5 text-center">OR</h5>
            <div className="flex gap-6">
                <SButtonPrimary
                    width={"50%"}
                    height={40}
                    border={1}
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
                    border={1}
                    background="orange"
                >
                    <div className="flex content-center justify-center gap-3 text-center">
                        <FaGoogle className=" self-center" />
                        Đăng nhập google
                    </div>
                </SButtonPrimary>
            </div>

            <h4 className="mt-4 text-center">
                Bạn có tài khoản ?<NavLink to={"/login"}>Đăng nhập</NavLink>
            </h4>
        </div>
    );
}
