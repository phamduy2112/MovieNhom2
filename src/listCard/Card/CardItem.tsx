import React, { useEffect, useState } from 'react'
import * as S from './card.style'
import { TProduct } from '../../service/Product/Product.type'
import { Link } from 'react-router-dom'


export function CartItem(props:TProduct) {

  return (
    <div className="col-12">
      <Link to={`/detail/${props.maPhim}`}>
          <S.itemCart>
      <a href="">
              <S.ItemImg src={props.hinhAnh} alt="" />
      <S.itemDate>Ngày Phát Hành:{new Date(props.ngayKhoiChieu).toLocaleDateString("vi-VI")}</S.itemDate>
      <S.itemName>{props.tenPhim}</S.itemName>
      </a>
      <S.buttons>
      
        <S.buttonA 
        href={`${props.trailer}`} border='red' background='transparent'
        onClick={()=>{console.log('hihi');
        }}
        
        >Trailer</S.buttonA>
        <S.buttonA href="" border='red' >Xem Chi Tiết</S.buttonA>
      </S.buttons>
    </S.itemCart>
      </Link>
    
    </div>
  
  )
}


