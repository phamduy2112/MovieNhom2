import React, { Fragment, useEffect, useRef, useState } from "react";
import S from "./Carousel.module.css";
import { Carousel } from "antd";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TBanner } from "../../../service/Banner/banner.type";
import { IIFE } from "../../../utils";
import { getBanner } from "../../../service/Banner/banner.service";
import { converToBanner } from "./Banner/helper/ConvertToBanner";

export function CarouSel() {
    const [banners, setBanners] = useState<TBanner[]>([]);
    const carouseRef = useRef(null);
    const onChange = (currentSlide: number) => {};
    useEffect(() => {
        IIFE(async () => {
            try {
                const data = await getBanner();

                if (data?.message === "Xử lý thành công!") {
                    const content = data.content;
                    setBanners(converToBanner(content));
                    // console.log(content);
                }
            } catch (e) {
                console.log({ e });
            }
        });
    }, []);

    const ListBanner = () => {
        return banners.map((i) => {
            return (
                <div >
                    <img src={i.hinhAnh} style={{width:'100%'}}/>
                </div>
            );
        });
    };
    return (
        <Fragment>
            <div className={`${S.CaroSel}`}>
                <Carousel
                    ref={carouseRef}
                    autoplay
                    autoplaySpeed={2000}
                    afterChange={onChange}
                >
                    {ListBanner()}

                    {/* <ListBanner banners={banners}/> */}
                </Carousel>

                {/* <ListBanner banners={banners}/> */}
                <div>
                    <img src="" alt="" />
                </div>
                <div className={`${S.twoClick}`}>
                    <button
                        className={`${S.prev}`}
                        onClick={() => {
                            carouseRef.current.prev();
                        }}
                    >
                        <MdKeyboardArrowLeft />
                    </button>
                    <button
                        className={`${S.next}`}
                        onClick={() => {
                            carouseRef.current.next();
                        }}
                    >
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </Fragment>
        // autoplay
    );
}
