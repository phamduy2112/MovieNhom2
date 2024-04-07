import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import S from "./Header.module.css";
import { SButtonPrimary } from "../Style/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUser } from "../../../redux/auth/auth.slice";
import { removeLocalStorage } from "../../../utils";
import { ACCESS_TOKEN } from "../../../constants";
type TNavLinkProps = {
    isActive: boolean;
};
export function Header() {
    const activeNavLink = ({ isActive }: TNavLinkProps) => {
        return {
            color: isActive ? "red" : "white",
        };
    };

    //* Lấy thông tin từ redux xuống để kiểm tra người dùng đã đăng nhập hay chưa
    const user = useAppSelector((state) => state.authReducer.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handlelogout = () => {
        dispatch(setUser(null));
        //Xoá localStorage
        removeLocalStorage(ACCESS_TOKEN);
        //Thực tế làm việc sẽ làm call api để đăng xuất
        navigate("/login");
    };

    return (
        <header className={S.header}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex gap-10">
                        <Link to={"/"} className={`mr-5 ${S.logo}`}>
                            MoVie
                        </Link>
                        <NavLink
                            to={"/"}
                            className={`${S.link}`}
                            style={activeNavLink}
                        >
                            Trang Chủ
                        </NavLink>
                        <NavLink
                            to={"/movies"}
                            className={`${S.link}`}
                            style={activeNavLink}
                        >
                            Lịch Chiếu
                        </NavLink>
                        <NavLink
                            to={"/news"}
                            className={`${S.link}`}
                            style={activeNavLink}
                        >
                            Tin Tức
                        </NavLink>
                        <NavLink
                            to={"/news"}
                            className={`${S.link}`}
                            style={activeNavLink}
                        >
                            Khuyến mãi
                        </NavLink>
                        <NavLink
                            to={"/news"}
                            className={`${S.link}`}
                            style={activeNavLink}
                        >
                            Giới Thiệu
                        </NavLink>
                    </div>

                    <div className="flex gap-3">
                        {user ? (
                            <>
                                <NavLink to={"/profile"}>
                                    <div className="flex items-center gap-2 mr-5">
                                        <img
                                            src="https://i.pravatar.cc?img=2"
                                            alt=""
                                            className="h-[40px] w-[40px] rounded-full"
                                        />
                                        <span>{user.hoTen}</span>
                                    </div>
                                </NavLink>

                                <button onClick={handlelogout} className="space-x-2">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                    <span>Đăng xuất</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to={"/register"}
                                    className={`${S.btnSuccessW}`}
                                >
                                    Đăng kí
                                </NavLink>
                                <NavLink to={"/login"}>
                                    <SButtonPrimary
                                        width={"120px"}
                                        height={40}
                                        borderRadius={2}
                                    >
                                        Đăng nhập
                                    </SButtonPrimary>
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
