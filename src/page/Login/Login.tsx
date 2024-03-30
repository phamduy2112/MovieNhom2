
import React from 'react'
import { Input } from '../../template/Component/Input/Input';
import { NavLink } from 'react-router-dom';
import { SButtonPrimary } from '../../template/Component/Style/Button';
import S from './userLR.module.css'
import { FaFacebookF ,FaGoogle  } from "react-icons/fa";





export default function Login() {
  return (
    <div className={`${S.login}`}>
      <h3 className='text-center'>Đăng nhập</h3>
      <p className='text-center'>Chào mừng bạn trở lại</p>
          <form>
            <Input name="Tài Khoản" type="text"/>
            <Input name="Mật Khẩu" type="password"/>
            <NavLink to={''} className='block mb-4 text-right'>Quên mật khẩu?</NavLink>
          
            <SButtonPrimary width={'100%'} height={40} borderRadius={2} type='submit'>Đăng nhập ngay</SButtonPrimary>
          </form>
            <h5 className='text-center my-5'>OR</h5>
            <div className='flex gap-6'>
              <SButtonPrimary width={'50%'} height={40} borderRadius={1} background='blue'>
      <div className='flex content-center justify-center gap-3 text-center'>
               <FaFacebookF className='self-center' />
                Đăng nhập facebook
      </div>
       
              </SButtonPrimary>
              <SButtonPrimary width={'50%'} height={40} borderRadius={1} background='orange'>
              <div className='flex content-center justify-center gap-3 text-center'>
               <FaGoogle className=' self-center'/>
                Đăng nhập google
      </div>
              
    
              </SButtonPrimary>
            </div>

            <h4 className='text-center mt-4'>Bạn chưa có tài khoản ?<NavLink to={'/register'}>Đăng kí</NavLink></h4>
          
    
    </div>
  )
}
