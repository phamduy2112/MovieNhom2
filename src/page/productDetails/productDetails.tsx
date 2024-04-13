import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { TProduct } from '../../service/Product/Product.type';
import { IIFE } from '../../utils';
import { getDetailProduct } from '../../service/Product/Product.service';
import { SButtonPrimary } from '../../template/Component/Style/Button';
import IconTheater from '../Home/CumRap/IconTheater/iconTheater';
import { converToDetailProduct, converToTheaterDetailProduct } from './Helper';

import { getDetailTheaterProduct } from '../../service/DetailProdudct/DetailProduct.service';
import { TLichChieu } from '../../service/DetailProdudct/DetailProduct.type';

function ProductDetails(props) {
    const { productID } = useParams();
  
    const [movieTheaterDetail,setMovieTheaterDetail]=useState<TLichChieu[]>([]);
    useEffect(()=>{
      IIFE(async()=>{
        try{
      
          const data=await getDetailProduct(productID);
          const dataTheater=await getDetailTheaterProduct(productID);
          
          if(data?.message==='Xử lý thành công!'){
       
            const contentTheater=dataTheater.content;
            
            setMovieTheaterDetail(converToTheaterDetailProduct(contentTheater))
           
          }
        }catch(e){
          console.log(e);
          
        }
      })
    },[productID])
    // console.log(movieTheaterDetail);
    console.log("Data final", {movieTheaterDetail});
  return (
    
    <div className="container">
        <div className='p-11' style={{filter:'blur(8px)', height:'350px', background:`url(${movieTheaterDetail?.hinhAnh})`,backgroundSize:'cover',backgroundPosition:'center'}}>
       
    </div>
    <div className=" detailProduct w-[1000px] mx-auto mt-28" style={{position:'absolute',top:'14%',left:'25%',transform:'translate(0%,-50%)'}}>
            <div className="flex gap-4" >
              <div className="detailProduct-left w-[500px]">

            <img src={movieTheaterDetail?.hinhAnh} alt="" style={{width:'100%', height:'200px'}}/>

            </div>
            <div className="detailProduct-right">
              <h3 className="name text-4xl">{movieTheaterDetail?.tenPhim}</h3>
              <div className="time text-2xl">120 phút - 10 Tix - 2D/Digital</div>
              <div className="timeDay text-2xl">Khởi Chiếu:{movieTheaterDetail?.ngayKhoiChieu}</div>
              <div className="title text-2xl">
              Mô tả:{movieTheaterDetail?.moTa}
              </div>
              <div className="flex gap-3">
                <button>Xem Chi Tiết</button>
                <SButtonPrimary width='130px' height={37} borderRadius={3}>
                  Trailer
                </SButtonPrimary>
              </div>
            </div>
            </div>
            
              
            
          </div>
    <div className='flex items-center justify-center gap-16 mt-4'>
                <button className='text-3xl'>Lịch Chiếu</button>

                <button className='text-3xl'>Đánh Giá</button>
              </div>
            

                <div className='w-[800px] border mt-4 mx-auto flex gap-3'>
                  <IconTheater></IconTheater>
                <div className=''>
                  <div className='flex py-3 gap-7'  style={{width:'680px',scrollbarWidth:'thin',overflowX:'auto',overflowY:'hidden'}}>
                    <p  className='text-2xl text-center'><span className='text-[1.5rem]'>Thứ năm</span> <br />
                      1970.01.01
                    </p>
                  
                  </div>
                  <div className="theater mt-4">
                    <div className="flex gap-3">
                    <div className="theater-img">
                      {/* <img className='w-[50px]' src={movieTheaterDetail.heThongRapChieu[0].logo} alt="" /> */}

                    </div>
                    <div className="theater-text">
                      {/* <h3 className='text-2xl'>{movieTheaterDetail.heThongRapChieu[0].cumRapChieu[0].tenCumRap}</h3> */}
                      <p className='text-xl'>{movieTheaterDetail?.heThongRapChieu[0].cumRapChieu[0].diaChi}</p>
                    </div>

                    </div>
                    <div className='mt-3'>
                           {/* <SButtonPrimary width='80px' style={{lineHeight:'3.2rem'}} height={32}  background='transparent' border='red' borderRadius={.6}>{movieTheaterDetail.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim.ngayChieuGioChieu}</SButtonPrimary> */}

                    </div>
                   
                    
                  </div>
                </div>

              </div>
    </div>
  
  )
}

export default ProductDetails
