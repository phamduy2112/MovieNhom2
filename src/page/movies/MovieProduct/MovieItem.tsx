import { DanhSachPhimMovies } from '../../../service/Movie/Movie.type';
import * as S from './Movie.Style';
export const MoviesItem=(props:DanhSachPhimMovies)=>{
    console.log(props.ngayChieuGioChieu);
    
    
    return (
        <div>
            <S.MovieItem>
                <a href="" className='flex gap-3'>
                    <img style={{width:'180px',height:'28rem'}} src={props.hinhAnh} alt="" />
                    <div>
                        <S.MovieName>{props.tenPhim}</S.MovieName>
                        <S.MovieDate className='date'>Khởi Chiếu:{[...new Set(new Date(props.ngayChieuGioChieu).toLocaleDateString("vi-VI"))]}</S.MovieDate>
                        <S.MovieTitle className="title mr-2">Rap: 
                     {props.tenRap.map((item)=>{
                            return    <span className='mr-3'>{item}</span>
                        })}
                        
                        </S.MovieTitle>
                        <div className='showtimes mt-2'>
                            <div className='mb-2'>Lịch Chiếu</div>
                            <div className="flex gap-3 flex-wrap">
                               {
                                props.ngayChieuGioChieu.map((item)=>{
                                    return (
                                        <S.showTimes>
                                            {item}
                                        </S.showTimes>  
                                    )

                                })
                               } 
                     
                               
                            </div>
                           
                        </div>
                    </div>
                </a>
            {props.hot?    <S.MovieHot>Hot</S.MovieHot>:''}
            
            </S.MovieItem>
        </div>

        )
}