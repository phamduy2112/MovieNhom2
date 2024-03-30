import React, { useEffect, useState } from 'react'
import CartItem from '../../../listCard/Card/CardItem'
import { TProduct } from '../../../service/Product/Product.type'
import { IIFE } from '../../../utils';
import { getProduct } from '../../../service/Product/Product.service';
import { converToProduct } from './ProductFeature/Helper';
import { ListHomeProduct } from './ListProduct';
import { SButtonPrimary } from '../../../template/Component/Style/Button';

export function HomeProduct() {
  const [movie,setMovie]=useState<TProduct[]>([]);
  const [type,setType]=useState(
true


   
);
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
  return (
    <div className='container'>
        <div className='flex my-3'>
            
           <SButtonPrimary width='150px' border={0} background='black' onClick={()=>{
            setType(true)
           }}>Phim Đang Chiếu</SButtonPrimary>
           <SButtonPrimary width='150px' border={0} background='black'  onClick={()=>{
            setType(
           false
          )
           }}>Phim Sắp Chiếu</SButtonPrimary>


        </div>
        <div className='row'>
       
        
<ListHomeProduct movie={movie} type={type}></ListHomeProduct>

    </div>
    <div className='flex justify-center items-center my-4'>
    <SButtonPrimary width='100px' border={.5}>Xem Thêm</SButtonPrimary>

    </div>
    </div>
  )
}


