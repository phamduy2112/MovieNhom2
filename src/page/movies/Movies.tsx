import React from 'react'
import { MoviesItem } from './MovieProduct/MovieItem'


export default function Movies() {
  return (
    <div className='container'>
        <div className='row mt-40'>
          <h3>Phim đang chiếu</h3>

        <div className="col-4">
      <MoviesItem></MoviesItem>
        </div>
    </div>
    </div>
  
  )
}
