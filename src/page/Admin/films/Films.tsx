import React, { useEffect } from "react";

type Props = {};

import { Table, Input, Button } from "antd";
import { AudioOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { IoSearchOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getFilmsThunk } from "../../../redux/admin/quanLyPhim.slice";
import { NavLink, useNavigate } from "react-router-dom";

const { Search } = Input;

function Films({}: Props) {
    const navigate = useNavigate()
    const { arrFilmDefault } = useAppSelector(
        (state) => state.QuanLyPhimReducer,
    );
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getFilmsThunk());
    }, []);

    console.log({ arrFilmDefault });

    const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
        console.log(info?.source, value);

    interface DataType {
        key: React.Key;
        maPhim: number;
        hinhAnh: string;
        tenPhim: string;
        moTa: string;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: "Mã phim",
            dataIndex: "maPhim",
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ["descend", "ascend"],
            width: "15%",
        },
        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            render: (text, film, index) => {
                return (
                    <>
                        <img
                            src={film.hinhAnh}
                            alt={film.tenPhim}
                            className="h-[80px] w-[80px]"
                            onError={(e) => {
                                (e.target as HTMLImageElement).onerror = null;
                                (e.target as HTMLImageElement).src =
                                    `htpps://picsum.photos/id/${index}/50/50/`;
                            }}
                        />
                    </>
                );
            },
            width: "15%",
        },
        {
            title: "Tên phim",
            dataIndex: "tenPhim",
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend", "ascend"],
            filterSearch: true,
            width: "25%",
        },
        {
            title: "Mô tả",
            dataIndex: "moTa",
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ["descend", "ascend"],
            filterSearch: true,
            render: (text, film) => {
                return (
                    <>
                        {film.moTa.length > 50
                            ? film.moTa.substring(0, 50) + "..."
                            : film.moTa}
                    </>
                );
            },
            width: "25%",
        },
        {
            title: "Hành động",
            dataIndex: "hanhDong",
            render: (text, film) => {
                return (
                    <>
                        <NavLink className={"bg-yellow-500 text-white mr-3 text-[30px] rounded-lg"} to={`/admin/editfilm/${film.maPhim}`}>
                            <EditOutlined />
                        </NavLink>
                        <NavLink className={"bg-red-500 text-white text-[30px] rounded-lg"} to={"/"}>
                            <DeleteOutlined />
                        </NavLink>
                    </>
                );
            },
            width: "25%",
        },
    ];

    const data: DataType[] = arrFilmDefault;

    //! data lấy về từ calll api phải có thuộc tính key, khi truyền vào thuộc tính dataSource của Table Antd thì trình duyệt mới không báo lỗi "Warning: Each child in a list should have a unique "key" prop"
    const dataWithKey = data.map((item) => {
        return {
            ...item,
            key: item.maPhim, // hoặc sử dụng một trường duy nhất khác trong dữ liệu làm key
        };
    });

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
            <h3 className="mb-5 text-4xl font-bold">Quản lý phim</h3>
            <Button className="mb-4" onClick={()=>{navigate('/admin/createfilm')}}>Thêm phim</Button>
            <Search
                className="mb-4"
                placeholder="input search text"
                allowClear
                enterButton={<IoSearchOutline />}
                size="large"
                onSearch={onSearch}
            />
            <Table
                columns={columns}
                dataSource={dataWithKey}
                onChange={onChange}
            />
        </div>
    );
}

export default Films;
