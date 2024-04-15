import styled from "styled-components";
export const buttons=styled.div`
position: absolute;
top: 40%;
left: 50%;
opacity: 0;
transform: translate(-50%,-50%);
`
export const itemCart=styled.div`
width:100%;
position: relative;
/* border: 1px solid white; */
&:hover ${buttons}{
    opacity: 1;
    z-index: 11111;
}
`
export const ItemImg=styled.img`
width:100%;
height:350px;
border-radius:2rem;
&:hover{
    transform: scale(1.04);
  
}
`
export const itemDate=styled.div`
font-size: 1.5rem;
color: grey;
margin: .5rem 0 0;
`
export const itemName=styled.div`
font-size: 2.2rem;
/* margin: .5rem 0 0; */
`
type ButtonA={
    border?:string
    background?:string,
}
export const buttonA=styled.a<ButtonA>`
display: block;
width: 100px;
border: 1px solid black;
margin-bottom: 1rem;
text-align: center;
padding: 0.5rem 0;
border:1px solid ${props=>props.border};
background: ${props=>props.background ? props.background:"linear-gradient(210deg,#fe6969,#e30713)" };
border-radius: 0.5rem;

`