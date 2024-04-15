import React, { useEffect, useState } from 'react'

import  {movies} from '../../service/Movie/Movie.type'
import { IIFE } from '../../utils';
import { getMovies } from '../../service/Movie/Movie.service';
import { ConventToMovies } from './MovieProduct/helper/conventToMovies';
import MovieList from './MovieProduct/MovieList';



export default function Movies() {
  const [movies,setMovies]=useState<movies[]>([]);
  
  useEffect(()=>{
    IIFE(async()=>{
      const data=await getMovies();
      if(data ?.message==='Xử lý thành công!'){
        const content=data.content;
        console.log(content);
        
        setMovies(ConventToMovies(content))
      }
    })

  },[])

  
  return (
    <div className='container'>
        <div className='row mt-40'>
          <h3>Phim đang chiếu</h3>

       
          <MovieList movies={movies} />
 
    </div>
    </div>
  
  )
}
