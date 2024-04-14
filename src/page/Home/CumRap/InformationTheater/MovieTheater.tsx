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
                  props.content.map((item)=>{
                    return item.lstCumRap.map((item)=>{
                        return item.danhSachPhim.map((item)=>{
                          
                            
                            return   (
                               <>
                               <div className='flex gap-2 mt-3'>
                      <img className='w-[75px]' src={item.hinhAnh} alt="" />
                      <div className="text">
                          <h4 className='text-3xl'>{item.tenPhim}</h4>
                          <p className='text-2xl'>120 phút - 5 sao</p>
                    
                      </div>
      
                  </div>
                  <div className='showTimes mt-3'>
                            {item.lstLichChieuTheoPhim.map((item)=>{
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
