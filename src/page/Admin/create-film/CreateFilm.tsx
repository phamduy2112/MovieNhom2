import React, { useState } from "react";
import { DatePicker, Form, Input, InputNumber, Radio, Switch } from "antd";
import { Formik, FormikValues, useFormik, useFormikContext } from "formik";
import moment from "moment";
import { Key } from "antd/es/table/interface";
import {GROUP_ID } from "../../../constants";
import { useAppDispatch } from "../../../redux/hooks";
import { addFilmThunk } from "../../../redux/admin/quanLyPhim.slice";

type Props = {};
type SizeType = Parameters<typeof Form>[0]["size"];

const CreateFilm = (props: Props) => {
    const dispatch = useAppDispatch()
    const [imgSrc, setImgSrc] = useState("https://picsum.photos/200/200");
    const { handleSubmit, setFieldValue, handleChange, values } = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayKhoiChieu: "",
            danhGia: 0,
            dangChieu: false,
            sapChieu: false,
            hot: false,
            hinhAnh: {},
        },
        onSubmit: (values: FormikValues) => {
            console.log(values)
            values.maNhom = GROUP_ID
            //Biến đổi json thành formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(key, values[key]);
                } else {
                    formData.append(key, values.hinhAnh, values.hinhAnh.name);
                }
                //log dữ liệu của đôi tượng formData(bình thường không thể console.log formData ra không thông thường vì dữ liệu trong forrmData có tính bảo mật)
                console.log(key, formData.get(key));
            }
            dispatch(addFilmThunk(formData))
        },
    });
    const handleChangeInput = (e: any) => {
        let { name, value } = e.target;
        setFieldValue(name, value);
    };
    const [componentSize, setComponentSize] = useState<SizeType | "default">(
        "default",
    );

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    };

    const handleChangeDatePicker = (
        date: any,
        dateString: string | string[],
    ) => {
        const sDate = moment(date).format("DD/MM/YYYY");
        setFieldValue("ngayKhoiChieu", dateString);
    };

    const handleChangeInputNumber = (value: number | null | undefined) => {
        setFieldValue("danhGia", value);
    };
    const handleChangeSwitch = (fieldName1: string, fieldName2: string) => {
        return (checked: boolean) => {
            setFieldValue(fieldName1, checked);
            if (checked) {
                setFieldValue(fieldName2, false);
            }
        };
    };
    const handleChangeInputFile = async (e: any) => {
        if (e.target.files.length > 0) {
            let file = e.target.files[0];
            console.log(file);
            await setFieldValue("hinhAnh", file);
           
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async (e: any) => {
                await setImgSrc(e.target.result);
            };
        }
    };

    return (
        <>
            <h3 className="mb-5 text-center text-[20px] font-bold">
                Thêm phim mới
            </h3>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                initialValues={{ size: componentSize }}
                onValuesChange={onFormLayoutChange}
                size={componentSize as SizeType}
                style={{ maxWidth: 680 }}
                className="mx-auto max-w-[650px]"
                onSubmitCapture={handleSubmit}
            >
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={handleChangeInput} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker
                        name="ngayKhoiChieu"
                        format={"DD/MM/YYYY"}
                        onChange={handleChangeDatePicker}
                    />
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <InputNumber
                        name="danhGia"
                        min={1}
                        max={10}
                        onChange={handleChangeInputNumber}
                    />
                </Form.Item>
                <Form.Item label="Đang chiếu">
                    <Switch
                        onChange={handleChangeSwitch("dangChieu", "sapChieu")}
                        checked={values.dangChieu}
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                    />
                </Form.Item>
                <Form.Item label="Sắp chiếu">
                    <Switch
                        onChange={handleChangeSwitch("sapChieu", "dangChieu")}
                        checked={values.sapChieu}
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                    />
                </Form.Item>
                <Form.Item label="Hot">
                    <Switch
                        onChange={(checked) => setFieldValue("hot", checked)}
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                    />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button
                        type="submit"
                        className="rounded-xl border-[1px] border-green-600 px-3 py-2 hover:border-transparent hover:bg-green-600 hover:text-white"
                    >
                        Thêm phim
                    </button>
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input
                        type="file"
                        name="hinhAnh"
                        onChange={handleChangeInputFile}
                        accept="image/png, image/jpeg, image/gif"
                    />
                    <br />
                    <img src={imgSrc} className="w-[200px]" alt="..." />
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateFilm;
