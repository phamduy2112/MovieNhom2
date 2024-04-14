import React, { useEffect, useState } from "react";
import { Form, Select, DatePicker, InputNumber, Button } from "antd";
import type { DatePickerProps, InputNumberProps } from "antd";
import { IIFE } from "../../../utils";
import { layThongTinCumRap, layThongTinHeThongRap, taoLichChieu,} from "../../../service";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};



type THeThongRapChieu = {
    maHeThongRap: string;
    tenHeThongRap: string;
    biDanh: string;
    logo: string;
}

type TRap ={
    maRap:number,
    tenRap:string,
}

type TCumRap = {
    maCumRap: string,
    tenCumRap: string,
    diaChi: string,
    danhSachRap:TRap[],
}

interface Option {
    value: string | number;
    label: string;
    children?: Option[];
  }

const CreateShowTime: React.FC = () => {
    const {id,tenphim} =useParams()

    const {handleSubmit,values,setFieldValue} = useFormik({
        initialValues:{
            maPhim: id,
            ngayChieuGioCHieu:'',
            maRap:'',
            giaVe: '',
        },
        onSubmit: async (values) => {
            try{
                const result = await taoLichChieu(values)
                alert(result.data.content)
            }catch(e:any){
                console.log('error',e.response?.data)
            }
        }
    })
    
    const [state, setState] = useState({
        heThongRapChieu:[],
        cumRapChieu: [],
    });
    

    console.log('hethongRapChieu',state.heThongRapChieu)

    const heThongRapOption = ():Option[] =>{
        return state.heThongRapChieu?.map((item:THeThongRapChieu,index:number)=>({
            label: item.tenHeThongRap,
            value: item.maHeThongRap,
        }))
    }


    const handleChangeHeThongRap = async (value: string ,option:any) => {
        // console.log(value);
        try{
            let result = await layThongTinCumRap(value)
            console.log({result})
            setState({
                ...state,
                cumRapChieu: result.content
            })
                
        }catch(e){
            console.log("error",e)      
        }
    };

    const handleCHangeCumRap = (value:string) => {
        setFieldValue('maRap',value)
    }
    
    const onOk = (value: DatePickerProps["value"]) => {
        setFieldValue('ngayChieuGioCHieu',dayjs(value).format('DD/MM/YYYY hh:mm:ss'))
    };
    
    const onChangeInputNumber: InputNumberProps["onChange"] = (value) => {
        setFieldValue('giaVe',value)
    };

    useEffect(() => {
        IIFE(async()=>{
            try{
                let result = await layThongTinHeThongRap()

                setState({
                    ...state,
                    heThongRapChieu: result.content
                })
            }catch(e){
                console.log('error',e)
            }     
        })
    },[])

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onSubmitCapture={handleSubmit}
        >
            <div className ='mb-5'>
                <span className="text-[20px] font-semibold mr-3">Tạo lịch chiếu</span>
                <span className=' text-green-500 text-[22px] font-semibold'>{`${tenphim}`}</span>
            </div>
            <Form.Item<FieldType> label="Hệ thống rạp">
                <Select
                    options={heThongRapOption()}
                    onChange={handleChangeHeThongRap}
                    placeholder="Chọn hệ thống rạp"
                />
            </Form.Item>

            <Form.Item<FieldType> label="Cụm rạp">
                <Select
                    options={state.cumRapChieu?.map((cumRap:TCumRap,index):Option=>({
                        label:cumRap.tenCumRap,
                        value:cumRap.maCumRap,
                    }))}
                    onChange={handleCHangeCumRap}
                    placeholder="Chọn cụm rạp"
                />
            </Form.Item>

            <Form.Item<FieldType> label="Ngày chiếu - giờ chiếu">
                <DatePicker
                    showTime
                    onChange={(value, dateString) => {
                        console.log("Selected Time: ", value);
                        console.log("Formatted Selected Time: ", dateString);
                    }}
                    onOk={onOk}
                    format={'DD/MM/YYYY hh:mm:ss'}
                />
            </Form.Item>

            <Form.Item<FieldType> label="Giá vé">
                <InputNumber
                    min={75000}
                    max={200000}
                    onChange={onChangeInputNumber}
                />
            </Form.Item>

            <Form.Item<FieldType> label="Chức năng">
                <Button htmlType="submit">Tạo lịch chiếu</Button>
            </Form.Item>
        </Form>
    );
};

export default CreateShowTime;
