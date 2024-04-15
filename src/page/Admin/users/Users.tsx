import React, { useEffect, useRef, useState } from "react";

type Props = {};

import { Table, Input, Button, Popconfirm, AutoComplete } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { NavLink, useNavigate } from "react-router-dom";
import { IIFE } from "../../../utils";

import {
    deleteUserThunk,
    getUsersThunk,
} from "../../../redux/admin/quanLyUser.slice";

function Users({}: Props) {
    const navigate = useNavigate();
    const { userList } = useAppSelector((state) => state.QuanLyUserReducer);
    const [value, setValue] = useState("");
    const [options, setOptions] = useState<DataType[]>([]);

    const dispatch = useAppDispatch();
    useEffect(() => {
        IIFE(async () => {
            dispatch(getUsersThunk(value));
        });
    }, [value]);

    const userRef = useRef<any>(null);

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
            render: (text, { taiKhoan }) => {
                return (
                    <div>
                        <NavLink
                            className={" mr-3 text-[30px] text-yellow-500"}
                            to={`/admin/edituser/${taiKhoan}`}
                        >
                            <EditOutlined />
                        </NavLink>

                        <Popconfirm
                            title="Bạn có muốn xóa "
                            onConfirm={async () => {
                                await dispatch(deleteUserThunk(taiKhoan));
                                dispatch(getUsersThunk(""));
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

    const data = userList.map((item: DataType, index) => ({
        ...item,
        stt: index + 1,
    }));

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
                    navigate("/admin/createuser");
                }}
            >
                Thêm người dùng
            </Button>
            <AutoComplete
                popupClassName="certain-category-search-dropdown"
                popupMatchSelectWidth={500}
                options={options.map((user, index) => {
                    return {
                        key: index,
                        label: user.taiKhoan,
                        value: user.taiKhoan,
                    };
                })}
                onChange={async (data) => {
                    if (userRef.current) {
                        clearTimeout(userRef.current);
                    }
                    userRef.current = setTimeout(() => {
                        setValue(data);
                        if (data) {
                            setOptions(userList);
                        }
                    }, 700);
                }}
                size="large"
                className="mb-3 w-full"
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
