// #test{
//     border:3px solid #00ff00;
//     width:200px;
//     height:200px;
//     overflow-x:hidden;
//     overflow-y:auto;

import { useEffect, useState } from "react"
import { showTimes } from "../../../../service/Theater/ShowTimes.type"
import { IIFE } from "../../../../utils";
import { getShowTimesTheater } from "../../../../service/Theater/ShowTimes.service";
import { ConverToShowTimesTheater } from "./helper/ConverToShowTimesTheater";
import ListShowTimesTheater from './ListShowTimesTheater';

// }
export const ShowTimesTheater=()=>{
    const [showTimesTheater,setShowTimesTheater]=useState<showTimes[]>([]);
    useEffect(()=>{
        IIFE(async()=>{
            try{
                    const data=await getShowTimesTheater();
                    if(data?.message==='Xử lý thành công!'){
                        const content=data.content;
                        setShowTimesTheater(ConverToShowTimesTheater(content))
                    }
             
                    
            }catch(e){
                console.log(e);
                
            }
        })
    },[]) 
          console.log(showTimesTheater);
    return (
        <div>
            <ListShowTimesTheater content={showTimesTheater}></ListShowTimesTheater>
        </div>
    )
}