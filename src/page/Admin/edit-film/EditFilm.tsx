import React, { useEffect, useState } from "react";
import {
    DatePicker,
    DatePickerProps,
    Form,
    Input,
    InputNumber,
    Radio,
    Switch,
} from "antd";
import { Formik, FormikValues, useFormik, useFormikContext } from "formik";
import moment from "moment";
import { Key } from "antd/es/table/interface";
import { GROUP_ID } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
    addFilmThunk,
    getFilmInfoThunk,
    updateFilmThunk,
} from "../../../redux/admin/quanLyPhim.slice";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
type Props = {};
type SizeType = Parameters<typeof Form>[0]["size"];
const EditFilm = (props: Props) => {
    const { id } = useParams();
    useEffect(() => {
        if (typeof id === "string") {
            dispatch(getFilmInfoThunk(id));
            console.log("useffect");
        }
    }, []);


    const dispatch = useAppDispatch();
    const filmInfo: any = useAppSelector(
        (state) => state.QuanLyPhimReducer.filmInfo,
    );
    const [imgSrc, setImgSrc] = useState("");
    const navigate =useNavigate()
    console.log(filmInfo.hinhAnh);
    const { handleSubmit, setFieldValue, handleChange, values } = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: filmInfo.maPhim,
            tenPhim: filmInfo.tenPhim,
            trailer: filmInfo.trailer,
            moTa: filmInfo.moTa,
            ngayKhoiChieu: filmInfo.ngayKhoiChieu,
            danhGia: filmInfo.danhGia,
            dangChieu: filmInfo.dangChieu,
            sapChieu: filmInfo.sapChieu,
            hot: filmInfo.hot,
            hinhAnh: null,
        },
        onSubmit: (values: FormikValues) => {
            console.log(values);
            values.maNhom = GROUP_ID;
            if (
                (values.dangChieu && values.sapChieu) ||
                (!values.dangChieu && !values.sapChieu)
            ) {
                alert("Chọn 1 trong 2: đang chiếu hoặc sắp chiếu");
                return;
            }

            //Biến đổi json thành formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== "hinhAnh") {
                    formData.append(
                        key,
                        key === "ngayKhoiChieu"
                            ? dayjs(values[key]).format("DD/MM/YYYY")
                            : values[key],
                    );
                } else {
                    console.log("first", values.hinhAnh);
                    if (values.hinhAnh !== null) {
                        console.log("submit", values.hinhAnh);
                        formData.append(
                            key,
                            values.hinhAnh,
                            values.hinhAnh.name,
                        );
                    }
                }
                //log dữ liệu của đôi tượng formData(bình thường không thể console.log formData ra không thông thường vì dữ liệu trong forrmData có tính bảo mật)
                console.log(key, formData.get(key));
                dispatch(updateFilmThunk(formData));
                navigate('/admin/films')
            }
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

    const handleChangeDatePicker: DatePickerProps["onChange"] = (
        date,
        dateString,
    ) => {
        console.log(dayjs(date).format("DD/MM/YYYY"));
        setFieldValue("ngayKhoiChieu", date);
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
            await setFieldValue("hinhAnh", file);
            console.log('inner',values.hinhAnh) // Giá trị cũ

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async (e: any) => {
                await setImgSrc(e.target.result);
            };
        }
    };
    console.log('outer',values.hinhAnh) //Giá trị đã cập nhật
    return (
        <>
            <h3 className="mb-5 text-center text-[20px] font-bold">
                Chỉnh sửa phim
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
                    <Input
                        name="tenPhim"
                        onChange={handleChange}
                        value={values.tenPhim}
                    />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input
                        name="trailer"
                        onChange={handleChange}
                        value={values.trailer}
                    />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input
                        name="moTa"
                        onChange={handleChangeInput}
                        value={values.moTa}
                    />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker
                        name="ngayKhoiChieu"
                        format={"DD/MM/YYYY"}
                        onChange={handleChangeDatePicker}
                        value={
                            values.ngayKhoiChieu
                                ? dayjs(values.ngayKhoiChieu)
                                : null
                        }
                    />
                </Form.Item>
                <Form.Item label="Đánh giá">
                    <InputNumber
                        name="danhGia"
                        min={1}
                        max={10}
                        onChange={handleChangeInputNumber}
                        value={values.danhGia}
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
                        checked={values.hot}
                    />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button
                        type="submit"
                        className="rounded-xl border-[1px] border-green-600 px-3 py-2 hover:border-transparent hover:bg-green-600 hover:text-white"
                    >
                        Cập nhật phim
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
                    <img
                        src={imgSrc === "" ? filmInfo.hinhAnh : imgSrc}
                        className="w-[200px]"
                        alt="..."
                    />
                </Form.Item>
            </Form>
        </>
    );
};

export default EditFilm;


