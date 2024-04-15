import React, { useEffect, useState } from 'react'
import { TIconTheater } from '../../../../service/Theater/icon.Theater'
import { IIFE } from '../../../../utils';
import { getIconTheater } from '../../../../service/Theater/Icon.service';
import { converToIconTheater } from './helper';
import IconItemTheater from './IconItemTheater';

function IconTheater() {
    const [iconsTheater,setIconsTheater]=useState<TIconTheater[]>([]);
    useEffect(()=>{
        IIFE(async()=>{
            try{
               const data=await getIconTheater();
            if(data?.message==='Xử lý thành công!'){
                const content=data.content;
                setIconsTheater(converToIconTheater(content));
            } 
            }catch(e){
                console.log(e);
                
            }
            
        })
    },[])
   
    
  return (
    <div className='flex justify-center items-center flex-col w-[110px] border  '
    style={{position:'sticky', top:'0'}}
    >
        <IconItemTheater content={iconsTheater}></IconItemTheater>

       
        
    </div>
  )
}

export default IconTheater
