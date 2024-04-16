import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'

import { IIFE } from '../../utils';
import IconTheater from '../Home/CumRap/IconTheater/iconTheater';

import { getDetailTheaterProduct } from '../../service/DetailProdudct/DetailProduct.service';
import { TLichChieu } from '../../service/DetailProdudct/DetailProduct.type';
import moment from 'moment';
import { converToTheaterDetailProduct } from './Helper';
import { SButtonPrimary } from '../../template/Component/Style/Button';

function ProductDetails() {
    const { productID } = useParams();
    const [movie,setMovie]=useState<TLichChieu>({});
    const [movieTheater,setMovieTheater] = useState<TLichChieu>({});
    const [movieTheaterDetail,setMovieTheaterDetail]=useState<TLichChieu>({});
    // const [movieTheaterDetail,setMovieTheaterDetail]=useState<any[]>([]);

    useEffect(()=>{
      IIFE(async()=>{
        try{
      
        
          const dataTheater=await getDetailTheaterProduct(productID);
          
          if(dataTheater?.message==='Xử lý thành công!'){
          
            const contentTheater:TLichChieu =dataTheater.content;
         
            console.log("data convert: ",converToTheaterDetailProduct(contentTheater));
            
            setMovieTheaterDetail(contentTheater)
            if(contentTheater.heThongRapChieu[0]){
              setMovieTheater(contentTheater.heThongRapChieu[0].cumRapChieu[0]);
            }
            if(contentTheater.heThongRapChieu[0].cumRapChieu[0]){
              setMovie(contentTheater.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]);
            }
          }
        }catch(e){
          console.log(e);
          
        }
      })
    },[productID])
    console.log(movieTheaterDetail);
    // console.log("Data final", {movieTheaterDetail});
  return (
    
    <div className="container">
        <div className='p-11' style={{filter:'blur(8px)', height:'350px', background:`url(${movieTheaterDetail.hinhAnh})`,backgroundSize:'cover',backgroundPosition:'center'}}>
       
    </div>
    <div className=" detailProduct w-[1000px] mx-auto mt-28" style={{position:'absolute',top:'14%',left:'25%',transform:'translate(0%,-50%)'}}>
            <div className="flex gap-4" >
              <div className="detailProduct-left w-[500px]">

            <img src={movieTheaterDetail.hinhAnh} alt="" style={{width:'100%', height:'200px'}}/>

            </div>
            <div className="detailProduct-right">
              <h3 className="name text-4xl">{movieTheaterDetail.tenPhim}</h3>
              <div className="time text-2xl">120 phút - 10 Tix - 2D/Digital</div>
              <div className="timeDay text-2xl">Khởi Chiếu:{movieTheaterDetail.ngayKhoiChieu}</div>
              <div className="title text-2xl">
              Mô tả:{movieTheaterDetail.moTa}
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
          {movieTheaterDetail.sapChieu?(<div className='text-center p-8'>Phim Chưa Công Chiếu</div>
         ):( <div>
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
                    <img className='w-[50px]' src={movieTheater.hinhAnh} alt="" />

                  </div>
                  <div className="theater-text">
                    <h3 className='text-2xl'>{movieTheater.tenCumRap}</h3>
                    <p className='text-xl'>{movieTheater.diaChi}</p>
                    {/* Phần này bạn bị lỗi do nó không hiểu được movieTheaterDetail?.heThongRapChieu[0] do bạn đang để sai kiểu dữ liệu, đây phải là object bạn cứ so sánh lại với code cũ và đồng thời bạn check lại cho mình kiểu dữ liệu TLichChieu, thứ 2 do API cái phần heThongRapChieu API nó trả về mảng rỗng nên phần này bạn làm toán tử 3 ngôi nếu nó undefine thì render ra unknown cho đỡ bị báo lỗi, mà lỗi nguồn gốc do bạn định nghĩa sai kiểu dữ liệu cho movieTheaterDetail. Và phần converToTheaterDetailProduct là mình cảm thấy không cần thiết vì data sau khi được convert vẫn không mấy thay đổi data vẫn giữ nguyên và bạn chỉ nhóm lại các data cũ vào 1 thuộc tính thì với mình điều này không cần thiết mà còn làm code phức tạp, chiếm thêm bộ nhớ khi phải viết hàm rồi định nghĩa thêm kiểu dữ liệu vào nữa. Bạn kéo api về, api trả về data thì bạn cứ đem đi dùng như bình thường là được. Còn lại thì do lỗi nó bắt nguồn từ kiểu dữ liệu và phần code ở các dòng từ dòng 19 - 38 của file này, bạn check lại đối chiếu nhé.  */}
                    {/* <p className='text-xl'>{movieTheaterDetail?.heThongRapChieu?.length != 0 ? "Identify" :"UnKnown"}</p> */}
                    {/* <p className='text-xl'>{tenRap}</p> */}
                  </div>

                  </div>
                  <div className='mt-3'>
                         <SButtonPrimary width='80px' style={{lineHeight:'3.2rem'}} height={32}  background='transparent' border='red' borderRadius={.6}>{
                       
                       moment(movie.ngayKhoiChieu).format('kk:mm:ss')
                          
                
                         
                         }
                         
                         </SButtonPrimary>

                  </div>
                 
                  
                </div>
              </div>

            </div>

        </div>)}
    
    </div>
  
  )
}

export default ProductDetails