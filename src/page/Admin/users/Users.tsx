import React, { useEffect } from "react";

type Props = {};

import { Table, Input, Button, Popconfirm, AutoComplete } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { NavLink, useNavigate } from "react-router-dom";
import { IIFE } from "../../../utils";
import { LayDanhSachNguoiDung } from "../../../service";
import { getUsersThunk } from "../../../redux/admin/quanLyUser.slice";

const { Search } = Input;

function Users({}: Props) {
    const navigate = useNavigate();
    const { userList } = useAppSelector(
        (state) => state.QuanLyUserReducer,
    );
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        IIFE(
            async () => {
              dispatch(getUsersThunk())
            }
        )
    }, []);

    // console.log({ arrFilmDefault });

    const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
        console.log(info?.source, value);
        //Gọi api lấy danh sách phim
        // dispatch(getFilmsThunk(value));
    };

    interface DataType {
        key: React.Key;
        stt: number;
        taiKhoan: string;
        hoTen: string;
        matKhau: string;
        soDT: number;
        maLoaiNguoiDung: string;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: "STT",
            dataIndex: "stt",
        },

        {
            title: "Tài khoản",
            dataIndex: "taiKhoan",
            sorter: (a, b) => {
                let nameA = a.taiKhoan.toLowerCase().trim();
                let nameB = b.taiKhoan.toLowerCase().trim();
                if (nameA > nameB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Mật khẩu",
            dataIndex: "matKhau",

            filterSearch: true,
        },
        {
            title: "Họ Tên", 
            dataIndex: "hoTen",
            sorter: (a, b) => {
                let nameA = a.hoTen.toLowerCase().trim();
                let nameB = b.hoTen.toLowerCase().trim();
                if (nameA > nameB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Số điện thoại",
            dataIndex: "soDT",

            filterSearch: true,
        },

        {
            title: "Hành động",
            dataIndex: "hanhDong",
            render: (text, film) => {
                return (
                    <div>
                        <NavLink
                            className={" mr-3 text-[30px] text-yellow-500"}
                            to={`/admin/`}
                        >
                            <EditOutlined />
                        </NavLink>

                        <Popconfirm
                            title="Bạn có muốn xóa "
                            onConfirm={() => {
                                alert(1213);
                            }}
                            cancelText="Huỷ"
                            okText="Chắn chắn"
                        >
                            <span
                                className={
                                    " mr-3 cursor-pointer text-[30px] text-red-500"
                                }
                                onClick={async () => {}}
                            >
                                <DeleteOutlined />
                            </span>
                        </Popconfirm>
                    </div>
                );
            },
        },
    ];

    const data = userList.map((item:DataType,index)=>({
        ...item,
        stt: index+1
    }))

    

    // //! data lấy về từ calll api phải có thuộc tính key, khi truyền vào thuộc tính dataSource của Table Antd thì trình duyệt mới không báo lỗi "Warning: Each child in a list should have a unique "key" prop"
    // const dataWithKey = data.map((item) => {
    //     return {
    //         ...item,
    //         key: item.maPhim, // hoặc sử dụng một trường duy nhất khác trong dữ liệu làm key
    //     };
    // });

    const onChange: TableProps<DataType>["onChange"] = (
        pagination,
        filters,
        sorter,
        extra,
    ) => {
        console.log("params", pagination, filters, sorter, extra);
    };

    return (
        <div>
            <h3 className="mb-5 text-4xl font-bold">Quản lý người dùng</h3>
            <Button
                className="mb-4"
                onClick={() => {
                    navigate("/admin/createfilm");
                }}
            >
                Thêm người dùng
            </Button>
            <AutoComplete
                popupClassName="certain-category-search-dropdown"
                popupMatchSelectWidth={500}
                style={{ width: "100%" }}
                // options={options}
                onChange={value => console.log(value)}
                size="large"
            >
                <Input.Search size="large" placeholder="input here" />
            </AutoComplete>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                rowKey={"taiKhoan"}
            />
        </div>
    );
}

export default Users;
