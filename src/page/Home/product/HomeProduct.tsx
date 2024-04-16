import React, { useEffect, useState } from 'react'
import { TProduct } from '../../../service/Product/Product.type'
import { IIFE } from '../../../utils';
import { getProduct } from '../../../service/Product/Product.service';
import { converToProduct } from './ProductFeature/Helper';
import { ListHomeProduct } from './ListProduct';
import { SButtonPrimary } from '../../../template/Component/Style/Button';

export function HomeProduct() {
  const [movie,setMovie]=useState<TProduct[]>([]);
  const [type,setType]=useState(true);
  const [active,setActive]=useState({
    dangChieu:true,
    sapChieu:false
  })

  useEffect(()=>{
    IIFE(async ()=>{
      try{
        const data=await getProduct();
        if(data?.message==="Xử lý thành công!"){
          const content=data.content;
          setMovie(converToProduct(content))
        }
      }catch(e){
        console.log(e);
        
      }
    })
  },[])
  // console.log(movie);
console.log(type);

//   useEffect(()=>{


// <ListHomeProduct movie={movie} type={type}></ListHomeProduct>
//   },[movie])
const  backgroundDC=active.dangChieu ?"linear-gradient(210deg,#fe6969,#e30713)" :"black"; 
const  backgroundSC=active.sapChieu ?"linear-gradient(210deg,#fe6969,#e30713)" :"black" ;
  return (
    <div className='container'>
        <div className='flex my-3'>
            
           <SButtonPrimary width='150px' borderRadius={0} 
           background={backgroundDC}
           onClick={()=>{
            setType(true),
            setActive(
              {
                dangChieu:true,
                sapChieu:false
              }
            )
           }
           
           }>Phim Đang Chiếu</SButtonPrimary>
           <SButtonPrimary width='150px' borderRadius={0}  
           style={{lineHeight:'3.5rem'}}
           background={backgroundSC}
           onClick={()=>{
            setType(false),
            setActive(
              {
                dangChieu:false,
                sapChieu:true
              }
            )
           }
           
           }>Phim Sắp Chiếu</SButtonPrimary>


        </div>
        <div className='row'>
       
        
<ListHomeProduct movie={movie} type={type}></ListHomeProduct>

    </div>
    <div className='flex justify-center items-center my-4'>
    <SButtonPrimary width='100px' borderRadius={.5}    
    style={{lineHeight:'3.5rem'}}>Xem Thêm</SButtonPrimary>

    </div>
    </div>
  )
}


