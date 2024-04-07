import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Component/Header'
import { Footer } from '../Component/Footer'
import { useAppDispatch } from '../../redux/hooks'
import { getProfileThunk } from '../../redux/auth/auth.slice'



function UserTemplate() {
  const dispatch = useAppDispatch()

  useEffect(()=>{
      dispatch(getProfileThunk())
  },[])
  return (
    <div>
        <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserTemplate
