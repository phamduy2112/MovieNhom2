// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { globalConfig } from 'antd/es/config-provider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.config'
import GlobalStyle from './Component/GlobalStyle/GlobalStyle'

// ** Redux
import { store } from "./redux/store.config.ts";
import { Provider } from "react-redux";
// ** End - Redux

function App() {


  return (
    <GlobalStyle >
      <Provider store={store}>
       <RouterProvider router={router} />
      </Provider>
    </GlobalStyle>
   
  )
}

export default App
