import styled from "styled-components";
import { TProduct } from "../../../service/Product/Product.type"
import { CartItem } from '../../../listCard/Card/CardItem';

type Props={
    type:boolean[],
        products:TProduct[];
}
const ListProductWrapper=styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;

`
export function ListHomeProduct(props:Props){

       
        
        

    console.log(props.type);
    
    // console.log(props.movie)
    return (
        <ListProductWrapper>
     
{
    
  props.movie.slice(0,8).map((item)=>{
    const typeMovie= props.type ? item.dangChieu:item.sapChieu
    if(typeMovie){
      return (
        <CartItem 
       tenPhim={item.tenPhim}
       hinhAnh={item.hinhAnh}
       ngayKhoiChieu={item.ngayKhoiChieu}
        ></CartItem>
    )  
    }
    
})  
} 
        </ListProductWrapper>
    )
}
