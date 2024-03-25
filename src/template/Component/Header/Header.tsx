import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import S from "./Header.module.css";
import { SButtonPrimary } from '../Style/Button';
type TNavLinkProps={
    isActive:boolean;

}
export function Header() {
    
    const activeNavLink=({isActive}:TNavLinkProps)=>{
        return {
            color:isActive ? 'red' : 'white'
        }   
    }
  return (
    <header className={S.header}>
        <div className="container">
        <div className='flex justify-between items-center' >


            <div className='flex gap-10'>
                <Link to={"/"} className={`mr-5 ${S.logo}`}>MoVie</Link>
                 <NavLink to={"/"} className={`${S.link}`} style={activeNavLink}>Trang Chủ</NavLink>
      <NavLink to={"/movies"} className={`${S.link}`} style={activeNavLink}>Lịch Chiếu</NavLink>  
      <NavLink to={"/news"} className={`${S.link}`} style={activeNavLink}>Tin Tức</NavLink>  
      <NavLink to={"/news"} className={`${S.link}`} style={activeNavLink}>Khuyến mãi</NavLink>  
      <NavLink to={"/news"} className={`${S.link}`} style={activeNavLink}>Giới Thiệu</NavLink> 
            </div>
        
      <div className='flex gap-3'>
        <NavLink to={"/register"} className={`${S.btnSuccessW}`} >Đăng kí</NavLink>
                <NavLink to={"/login"} >
                    <SButtonPrimary width={'120px'} height={40} border={2}>Đăng nhập</SButtonPrimary>

                </NavLink>

        </div>  
        </div>
        
        </div>
      
    </header>
  )
}
