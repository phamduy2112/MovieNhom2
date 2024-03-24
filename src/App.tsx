import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { globalConfig } from 'antd/es/config-provider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.config'
import GlobalStyle from './Component/GlobalStyle/GlobalStyle'


function App() {


  return (
    <GlobalStyle >
       <RouterProvider router={router} />
    </GlobalStyle>
   
  )
}

export default App
