import React, { useEffect, useState } from 'react'

import { IIFE } from '../../../../utils';

import ListInfoTheater from './ListInfoTheater';
import { ConverToShowTimesTheater } from '../ShowTimesTheater/helper/ConverToShowTimesTheater';
import { getShowTimesTheater } from '../../../../service/Theater/ShowTimes.service';
import { showTimes } from '../../../../service/Theater/ShowTimes.type';
import MovieTheater from './MovieTheater';
import { converToInfoTheater } from './helper/ConverToInfo';
import { useAppSelector } from '../../../../redux/hooks';

function InformationTheater() {
    const [infoTheater,setInfoTheater]=useState<showTimes[]>([]);
    const valueIcon = useAppSelector((state) => state.getIconTheater.value);
    
    useEffect(()=>{
        IIFE(async()=>{
            try{
                    const data=await getShowTimesTheater(valueIcon);
                    if(data?.message==='Xử lý thành công!'){
                        const content=data.content;
                        setInfoTheater(converToInfoTheater(content))
                    }
             
                    
            }catch(e){
                console.log(e);
                
            }
        })
    },[valueIcon]) 

    
  return (
    <div className='flex'>
    <div style={{position:'sticky', top:'0'}}>
            <ListInfoTheater content={infoTheater}></ListInfoTheater>

    </div>
    <MovieTheater content={infoTheater}></MovieTheater>
    </div>
  )
}

export default InformationTheater
