import { Button, Form, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { FormikValues, useFormik } from "formik";
import {
    addUserThunk,
    getUserInfoThunk,
    getUsersThunk,
    getUsersTypeThunk,
    updateUserThunk,
} from "../../../redux/admin/quanLyUser.slice";
import { GROUP_ID } from "../../../constants";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};
type TUserType = {
    maLoaiNguoiDung: string;
    tenLoai: string;
};
function EditUser({}: Props) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const usersType: TUserType[] = useAppSelector(
        (state) => state.QuanLyUserReducer.usersType,
    );

    useEffect(() => {
        dispatch(getUsersTypeThunk());
    }, []);
    console.log({ usersType });

    const { taikhoan } = useParams();
    useEffect(() => {
        if (typeof taikhoan === "string") {
            dispatch(getUserInfoThunk(taikhoan));
        }
    }, []);

    const userInfo: any = useAppSelector(
        (state) => state.QuanLyUserReducer.userInfo,
    );
    console.log({userInfo})
    const [componentSize, setComponentSize] = useState<SizeType | "default">(
        "default",
    );

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userInfo?.taiKhoan,
            matKhau: userInfo?.matKhau,
            email: userInfo?.email,
            hoTen: userInfo?.hoTen,
            soDT: userInfo?.soDT,
            maLoaiNguoiDung: userInfo?.maLoaiNguoiDung,
            maNhom: GROUP_ID,
        },
        onSubmit: async (values: FormikValues, { resetForm }) => {
            await dispatch(updateUserThunk(values))
            await dispatch(getUsersThunk(""));
            resetForm();
            navigate("/admin/users");
        },
    });

    return (
        <div>
            <h3 className="mb-10 text-4xl font-semibold">
                Chỉnh sửa người dùng
            </h3>
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 6 }}
                autoComplete="off"
                onSubmitCapture={handleSubmit}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
            >
                <Form.Item
                    label="Tài khoản"
                  
                    rules={[
                        { required: true, message: "Required" },
                        { min: 6, message: "Tối thiểu 6 ký tự" },
                    ]}
                >
                    <Input
                        name="taiKhoan"
                        onChange={handleChange}
                        
                        value={values?.taiKhoan}
                        disabled
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    
                    rules={[
                        {
                            required: true,
                            message: "Required",
                        },
                        {
                            type: "email",
                            message: "Không đúng định dạng email",
                        },
                    ]}
                >
                    <Input
                        name="email"
                        onChange={handleChange}
                        value={values?.email}
                        disabled
                    />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
                    
                    rules={[
                        {
                            required: true,
                            message: "Mật khẩu không được để trống",
                        },
                    ]}
                >
                    <Input.Password
                        name="matKhau"
                        onChange={handleChange}
                        value={values?.matKhau}

                    />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    
                    rules={[
                        { required: true, message: "Required" },
                        { min: 9, message: "Tối thiểu là 10 chữ số" },
                    ]}
                >
                    <Input
                        name="soDT"
                        onChange={handleChange}
                        value={values?.soDT}
                    />
                </Form.Item>

                <Form.Item
                    label="Họ Tên"
                    
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Input
                        name="hoTen"
                        onChange={handleChange}
                        value={values?.hoTen}
                    />
                </Form.Item>

                <Form.Item
                    label="Loại người dùng"
                    rules={[{ required: true, message: "Required" }]}
                >
                    <Select
                        defaultValue={values.maLoaiNguoiDung}
                        placeholder="Chọn loại người dùng"
                        onChange={(value) => {
                            setFieldValue("maLoaiNguoiDung", value);
                            console.log(value);
                        }}
                        options={usersType.map((type, index) => ({
                            label: type.tenLoai,
                            value: type.maLoaiNguoiDung,
                        }))}
                        value={values?.maLoaiNguoiDung}
                    ></Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
                    <Button htmlType="submit">Lưu</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default EditUser;
