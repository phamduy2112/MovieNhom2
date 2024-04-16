import React from 'react'
import { SButtonPrimary } from '../../../../template/Component/Style/Button'
//
function ListInfoTheater(props) {
 
  return (
    <div  style={{position:'sticky', top:'0'}}>
      {
        props.content.map((item: { lstCumRap: { id: React.Key | null | undefined; hinhAnh: string | undefined; tenCumRap: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; diaChi: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }[]; })=>{
         return item.lstCumRap.map((item: { id: React.Key | null | undefined; hinhAnh: string | undefined; tenCumRap: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; diaChi: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined })=>{
        
          
              return(

         <button className='w-[550px] flex gap-3 border-b-[2px] p-3' key={item.id}>
      
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
