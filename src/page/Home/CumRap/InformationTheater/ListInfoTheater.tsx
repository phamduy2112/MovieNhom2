import React from 'react'
import { SButtonPrimary } from '../../../../template/Component/Style/Button'
//
function ListInfoTheater(props) {
 
  return (
    <div  style={{position:'sticky', top:'0'}}>
      {
        props.content.map((item)=>{
         return item.lstCumRap.map((item)=>{
        
          
              return(

         <button className='w-[550px] flex gap-3 border-b-[2px] p-3' >
      
    <img className='w-24' src={item.hinhAnh} alt="" />
      <div className="text-start w-100">
          <h4 className='text-3xl'>{item.tenCumRap}</h4>
          <p className='text-2xl text-gray-400'>{item.diaChi}</p>
      </div>
  </button>
  


    )
         })
          

    
 
  }) 
      }
    </div>
  )
}

export default ListInfoTheater
