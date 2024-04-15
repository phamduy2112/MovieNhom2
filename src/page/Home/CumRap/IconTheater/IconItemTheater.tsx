import React from 'react'
import { TIconTheater } from '../../../../service/Theater/icon.Theater'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setIcon } from '../../../../redux/theater/theater.slice';

type Props={
    type:boolean[],
        products:TIconTheater[];
}

function IconItemTheater(props:Props) {

    
    const dispatch = useAppDispatch()


 
    return (
        <>
            {
                 props.content.map((item)=>{
        return (
            <button className='w-100 flex justify-center items-center' onClick={()=>{
                // console.log(item.maHeThongRap);
                dispatch(setIcon(item.maHeThongRap))
                
            }}>
              
                <img className='w-50 py-3 cursor-pointer' style={{borderBottom:'1px solid white'}} src={item.logo} alt="" />

          
            </button>
        )
    })  
            }
        </>
  )
}

export default IconItemTheater
