import React from 'react'
import { Input } from '../../template/Component/Input/Input'
import { NavLink } from 'react-router-dom'
import { SButtonPrimary } from '../../template/Component/Style/Button'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import S from './userLR.module.css'

export default function Register() {
  return (
    <div className={`${S.login}`}>
    <h3 className='text-center'>Đăng Kí</h3>
    <p className='text-center'>Hãy tham gia với chúng tôi</p>
        <form>
          <div className='flex gap-3'>
  <Input name="Họ Tên" type="text"/>
          <Input name="Tài Khoản" type="text"/>
          </div>
         
          <Input name="Email" type="text"/>
          <Input name="Số Điện Thoại" type="number"/>
          <Input name="Mật Khẩu" type="password"/>

        
          <SButtonPrimary className='mt-4' width={'100%'} height={40} border={2} type='submit'>Đăng kí ngay</SButtonPrimary>
        </form>
          <h5 className='text-center my-5'>OR</h5>
          <div className='flex gap-6'>
            <SButtonPrimary width={'50%'} height={40} border={1} background='blue'>
    <div className='flex content-center justify-center gap-3 text-center'>
             <FaFacebookF className='self-center' />
              Đăng nhập facebook
    </div>
     
            </SButtonPrimary>
            <SButtonPrimary width={'50%'} height={40} border={1} background='orange'>
            <div className='flex content-center justify-center gap-3 text-center'>
             <FaGoogle className=' self-center'/>
              Đăng nhập google
    </div>
            
  
            </SButtonPrimary>
          </div>

          <h4 className='text-center mt-4'>Bạn có tài khoản ?<NavLink to={'/login'}>Đăng nhập</NavLink></h4>
        
  
  </div>
  )
}
