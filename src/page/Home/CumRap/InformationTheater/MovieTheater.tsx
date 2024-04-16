import React from 'react'
import { SButtonPrimary } from '../../../../template/Component/Style/Button'
import moment from 'moment'
import { useAppSelector } from '../../../../redux/hooks';
import { useNavigate } from 'react-router-dom';

function MovieTheater(props) {
    const user = useAppSelector((state) => state.authReducer.user);
    const navigate = useNavigate();

    const checkUser=(idItem:string)=>{
        if(user===null){
            navigate("/login");

        }else{
            navigate(`/ticketroom/${idItem}`)
        }
    }
  return (
    <div className='px-3 border w-100'>
        {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  props.content.map((item: { lstCumRap: any[]; })=>{
                    
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return item.lstCumRap.map((item: { danhSachPhim: any[]; })=>{
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return item.danhSachPhim.map((item: { hinhAnh: string | undefined; tenPhim: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; lstLichChieuTheoPhim: any[]; },index: React.Key | null | undefined)=>{
                          
                            
                            return   (
                               <>
                               <div className='flex gap-2 mt-3' key={index}>
                      <img className='w-[75px]' src={item.hinhAnh} alt="" />
                      <div className="text">
                          <h4 className='text-3xl'>{item.tenPhim}</h4>
                          <p className='text-2xl'>120 phút - 5 sao</p>
                    
                      </div>
      
                  </div>
                  <div className='showTimes mt-3'>
                            {item.lstLichChieuTheoPhim.map((item: { ngayChieuGioChieu: moment.MomentInput; maLichChieu: any; })=>{
                                console.log(item);
                                
                                return <>
                                <h3 className='text-3xl mb-2'>{ moment(item.ngayChieuGioChieu).format('dddd, DD MMMM YYYY')}</h3>
                          <SButtonPrimary width="70px" height={40} borderRadius={1}
                          onClick={()=>{checkUser(`${item.maLichChieu}`);

                          }}
                          >{ moment(item.ngayChieuGioChieu).format('kk:mm:ss')}</SButtonPrimary>
                                </>
                            })}
                          
                      </div>
                               </> 
                                
                            )  
                        })
                        
                     
             
                    })
                     
           
               
            
             }) 
        }

    </div>
  )
}

export default MovieTheater
