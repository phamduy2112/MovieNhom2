import React from 'react'
import { TIconTheater } from '../../../../service/Theater/icon.Theater'

type Props={
    type:boolean[],
        products:TIconTheater[];
}

function IconItemTheater(props:Props) {


 
    return (
        <>
            {
                 props.content.map((item)=>{
        return (
            <button className='w-100 flex justify-center items-center'>
              
                <img className='w-50 py-3 cursor-pointer' style={{borderBottom:'1px solid white'}} src={item.logo} alt="" />

          
            </button>
        )
    })  
            }
        </>
  )
}

export default IconItemTheater
