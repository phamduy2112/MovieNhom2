import { useState } from "react";

import React from 'react'
import { Modal } from "antd";
import { SButtonPrimary } from "../../../template/Component/Style/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

function Model(props: { ticket: { thongTinPhim: { tenPhim: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; ngayChieu: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }; getTicketsRoom: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; total: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  const navigate = useNavigate();
  const user:any = useAppSelector((state) => state.authReducer.user);

const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);

  };
  const handleOk = () => {
    setIsModalOpen(false);
    // navigate('/')
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate('/')
  };
  return (
    <>
       <SButtonPrimary
                                        className="mb-3 mt-5"
                                        width="100%"
                                        borderRadius={1}
                                        height={34}
                                      
                                        onClick={showModal}
                                     
                                    >
                                        Thanh Toán
                                    </SButtonPrimary>
      <Modal title="Thanh Toán Thành Công" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h3>Vui Lòng kiểm tra thông tin của bạn</h3>
        <div>Tên bạn : <span>{user.hoTen}</span></div>
        <div>Số Điện Thoại: <span>{user.soDT}</span></div>
        <div>Tên phim: <span>{props.ticket.thongTinPhim.tenPhim}</span></div>
        <div>Thoi Gian: <span> {props.ticket?.thongTinPhim.ngayChieu}</span></div>
        <div>Ghế Bạn Chọn: <span> {props.getTicketsRoom}</span></div>
        <div>Giá Tiền: <span>{props.total}</span></div>
        <div>Thanh Toán: <span>Thanh toán trực tiếp</span></div>
       
      </Modal>
    
    </>
  );

}

export default Model

  
 