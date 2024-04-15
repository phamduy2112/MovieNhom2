import React from 'react'
import { CarouSel } from './carousel/carousel'
import { HomeProduct } from './product/HomeProduct'
import Theater from './CumRap/theater'


function Home() {
  return (
    <div>
      <CarouSel/>
      <HomeProduct/>
      <Theater />
    </div>
  )
}

export default Home
