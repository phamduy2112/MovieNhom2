import React, { Fragment, useEffect, useState } from "react";
import {
    TInfoTotal,
    TPurchasedChair,
    TSelectChair,
    TVipChair,
    TinfoTicket,
    TnormalChair,
    normalChair,
} from "./ticketRoom.style";
import { SButtonPrimary } from "../../template/Component/Style/Button";
import { tiketRoom } from "../../service/TicketRoom/tiket.type";
import { useNavigate, useParams } from "react-router-dom";
import { IIFE } from "../../utils";
import { getTiketRoom } from "../../service/TicketRoom/tiket.service";
import { converToTiketRoom } from "./helper/converToTikectRoom";
import T from "./ticketRoom.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import LoadPage from "../../template/Component/LoadPage/LoadPage";
import { setTicketChair } from "../../redux/ticketRoom/ticket.auth";
import { Button,Modal } from "antd";
import Model from "./Modal/Model";
function TicketRoom() {
    const dispatch = useAppDispatch();

    const { productID } = useParams();
    const [load, setLoad] = useState(true);
    const user = useAppSelector((state) => state.authReducer.user);
    const getTicket = useAppSelector((state) => state.getTiketRoom.tiket);

    const [ticket, setTicket] = useState<tiketRoom[]>({});

    const loadTrang = () => {
        IIFE(async () => {
            try {
                const data = await getTiketRoom(productID);
                if (data?.message === "Xử lý thành công!") {
                    const content: tiketRoom = data.content;
                    console.log(content);
                    setTicket(converToTiketRoom(content));
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoad(false);
            }
        });
    };

    useEffect(() => {
        loadTrang();
    }, [productID]);
    console.log(getTicket);
    
    const renderSeat = () => {
        return ticket?.danhSachGhe.map((item, index) => {
            const vipChair = item.loaiGhe == "Vip" ? `${T["TVipChair"]}` : "";

            const purchasedChair =
                item.daDat === true ? ` ${T["TPurchasedChair"]}` : "";
                let classSelectChair=``;
                const indexChair= getTicket.findIndex((itemChair)=>itemChair.maGhe==item.maGhe);
                if(indexChair!==-1){
    
                  classSelectChair=`${T["TSelectChair"]}`
                    
          
                }
            return (
                <Fragment>
                    <button
                        className={`${T["TnormalChair"]} ${classSelectChair}  ${vipChair} ${purchasedChair}`}
                        onClick={()=>{
                            if(!item.daDat){
                                dispatch(setTicketChair(item))
                            }else{
                                return 
                            }
                            
                        }}
                    >
                        {item.daDat ? (
                            <img
                                src="https://movie-booking-project.vercel.app/img/bookticket/notchoose.png"
                                alt=""
                                className="h-[20px] w-[20px]"
                            />
                        ) : (
                            `${item.tenGhe}`
                        )}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
            );
        });
    };
    const total=getTicket.reduce((total,item,index)=>{
        return total+=item.giaVe
    },0).toLocaleString();

    const getTicketsRoom=getTicket.map((item,index)=>{
        if(index==getTicket.length - 1){
            return item.tenGhe;
        }else{
            return item.tenGhe+','
        }
    })
    return (
        <div className="mb-3 mt-28">
            <div className="container">
                {load ? (
                    <LoadPage />
                ) : (
                    <div className="flex">
                        <TinfoTicket className="infoTicket w-[850px]">
                            <div className="inforTop flex justify-between">
                                <div className="flex gap-3">
                                    <img
                                        className="w-[50px]"
                                        src="https://movie-booking-project.vercel.app/img/logo-theater/bhd.png"
                                        alt=""
                                    />
                                    <div className="inforTop_title mt-2">
                                        <h4 className="text-[16px]">
                                            {ticket?.thongTinPhim.tenCumRap}
                                        </h4>
                                        <p className="text-[15px]">
                                            Thứ hai - 10:07 - Rạp 1
                                        </p>
                                    </div>
                                </div>
                                <div>Thời gian giữ ghế:5:00</div>
                            </div>
                            <div className="screen mt-4">
                                <img
                                    src="https://movie-booking-project.vercel.app/img/bookticket/screen.png"
                                    alt=""
                                />
                            </div>
                            <div className="inforBottom">
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-wrap gap-3">
                                        {/* 4 loại ghế */}
                                        {renderSeat()}
                                    </div>
                                </div>
                                <div className="mt-8 flex gap-5">
                                    {/* 4 loại ghế */}
                                    <div className="flex items-center justify-center gap-3">
                                        <TnormalChair className="normalChair"></TnormalChair>
                                        Ghế Thường
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <TVipChair className="vipChair"></TVipChair>
                                        Ghế Vip
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <TSelectChair className="normalChair"></TSelectChair>
                                        Ghế Bạn Chọn
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <TPurchasedChair className="normalChair">
                                            <img
                                                src="https://movie-booking-project.vercel.app/img/bookticket/notchoose.png"
                                                alt=""
                                                className="h-[20px] w-[20px]"
                                            />
                                        </TPurchasedChair>
                                        Ghế Đã Đặt
                                    </div>
                                </div>
                            </div>
                        </TinfoTicket>
                        <TInfoTotal className="infoTotal w-[500px] border">
                            <h3
                                className="py-3 text-center text-5xl"
                                style={{ borderBottom: "1px solid white" }}
                            >
                                Thanh Toán
                            </h3>
                            <div
                                style={{ borderBottom: "1px solid white" }}
                                className="py-3"
                            >
                                <p>
                                    Tên Phim:{" "}
                                    <span>{ticket?.thongTinPhim.tenPhim}</span>
                                </p>
                                <p>
                                    Cơ sở:{" "}
                                    <span>{ticket?.thongTinPhim.tenPhim}</span>
                                </p>
                                <p>
                                    Thời gian:{" "}
                                    <span>
                                        {ticket?.thongTinPhim.ngayChieu}
                                    </span>
                                </p>
                            </div>
                            <div
                                className="d-flex justify-between py-3"
                                style={{ borderBottom: "1px solid white" }}
                            >
                                <p>Ghế bạn chọn:{getTicketsRoom}</p>
                                <p>{total}</p>
                            </div>
                            <div
                                style={{ borderBottom: "1px solid white" }}
                                className="py-3"
                            >
                                <p className="text-2xl text-gray-100">Email</p>
                                {user.email}
                            </div>
                            <div
                                style={{ borderBottom: "1px solid white" }}
                                className="py-3"
                            >
                                <p className="text-2xl">Phone</p>
                                {user.soDT}
                            </div>
                            <div className="py-3">
                                <p className="text-2xl">Hình thức thanh toán</p>
                                <form method="post">
                                    <div className="formGroup flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="a"
                                            id="b"
                                            value={"hihi"}
                                        />
                                       

                                        <label htmlFor="b">
                                            Thanh Toán Trực Tiếp
                                        </label>
                                    </div>
                                
                            
                            
                                </form>
                       
    
      <Model ticket={ticket} total={total} getTicketsRoom={getTicketsRoom}>
      </Model>
                            </div>
                        </TInfoTotal>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TicketRoom;
