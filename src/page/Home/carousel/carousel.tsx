import React, { Fragment, useRef } from 'react';
import S from './Carousel.module.css'
import { Carousel } from 'antd';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight  } from "react-icons/md";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };



export function CarouSel() {
    const carouseRef=useRef(null);
    const onChange = (currentSlide: number) => {
    
      };
   
  return (
  <Fragment>
    <div className={`${S.CaroSel}`}>
       <Carousel
    ref={carouseRef}
    autoplay	
    autoplaySpeed={2000}
     afterChange={onChange}
    
     >
      <div>
        <img src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0017484.png&w=1920&q=75" alt="" />
   
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      
    
    </Carousel>  
     <div className={`${S.twoClick}`}>
                 <button className={`${S.prev}`} onClick={()=>{
        carouseRef.current.prev();
    }}>
 <MdKeyboardArrowLeft />

    </button>
    <button className={`${S.next}`} onClick={()=>{
        carouseRef.current.next();
    }}>
  <MdKeyboardArrowRight />

    </button>
        </div>
    </div>
  
 
  </Fragment>
    // autoplay	
    
  )
}
