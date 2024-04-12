import React from 'react'
import moment from 'moment';
import { SButtonPrimary } from '../../../../template/Component/Style/Button';

function ListShowTimesTheater(props) {
    console.log(props);
    

  return (
    <div className='p-3' style={{borderBottom:'1px'}}>
          {props.content.map((item)=>{
            return (
                <><div className='flex gap-2'>
                    <img className='w-[75px]' src="http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-iiisssssssssxxxssssssssssssssssssss_gp09.jpg" alt="" />
                    <div className="text">
                        <h4 className='text-3xl'>John Wick</h4>
                        <p className='text-2xl'>120 phút - 5 sao</p>
                    </div>
    
                </div><div className='showTimes mt-3'>
                        <h3 className='text-3xl mb-2'>Thứ hai, 01 tháng 07, 2019</h3>
                        <SButtonPrimary width="70px" height={40} borderRadius={1}>10:10</SButtonPrimary>
                    </div></>
            )
       
        
    })}
    </div>
  )
}

export default ListShowTimesTheater
