import Movies from '../Movies';
import * as S from './Movie.Style';
export const MoviesItem=()=>{
    return (
        <div>
            <S.MovieItem>
                <a href="" className='flex gap-3'>
                    <img style={{width:'180px',height:'28rem'}} src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017483_0.png&w=1920&q=75" alt="" />
                    <div>
                        <S.MovieName>GODZILLA X KONG: ĐẾ CHẾ MỚI 2D - K</S.MovieName>
                        <S.MovieDate className='date'>Khởi Chiếu:29/03/2024</S.MovieDate>
                        <S.MovieTitle className="title">Lorem, ipsum dolor sit amet consectetur adipisicing.</S.MovieTitle>
                        <div className='showtimes mt-2'>
                            <div className='mb-2'>Lịch Chiếu</div>
                            <div className="flex gap-2 flex-wrap">
                               <S.showTimes>
                                <p>09:30</p>
                            </S.showTimes>  
                               <S.showTimes>
                                <p>09:30</p>
                            </S.showTimes>  
                               <S.showTimes>
                                <p>09:30</p>
                            </S.showTimes>  
                               <S.showTimes>
                                <p>09:30</p>
                            </S.showTimes>  
                               <S.showTimes>
                                <p>09:30</p>
                            </S.showTimes>  
                               <S.showTimes>
                                <p>09:30</p>
                            </S.showTimes>  
                            </div>
                           
                        </div>
                    </div>
                </a>
                <S.MovieHot>Hot</S.MovieHot>
            
            </S.MovieItem>
        </div>
    )
}