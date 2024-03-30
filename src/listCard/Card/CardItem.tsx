import React, { useEffect, useState } from 'react'
import * as S from './card.style'
import { TProduct } from '../../service/Product/Product.type'


export function CartItem(props:TProduct) {

  return (
    <div className="col-12">
        <S.itemCart>
      <a href="">
              <S.ItemImg src={props.hinhAnh} alt="" />
      <S.itemDate>Ngày Phát Hành:{new Date(props.ngayKhoiChieu).toLocaleDateString("vi-VI")}</S.itemDate>
      <S.itemName>{props.tenPhim}</S.itemName>
      </a>
      <S.buttons>
      
        <S.buttonA href={`${props.trailer}`} border='red' background='transparent'>Trailer</S.buttonA>
        <S.buttonA href="" border='red' >Xem Chi Tiết</S.buttonA>
      </S.buttons>
    </S.itemCart>
    </div>
  
  )
}


