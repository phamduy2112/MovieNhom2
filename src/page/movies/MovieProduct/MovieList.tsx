import React from "react";
import { movies } from "../../../service/Movie/Movie.type";
import { MoviesItem } from "./MovieItem";
type Props = {
    // -- Or -- cards: Array<Card>;
    movies: movies[];
};
function MovieList(props: Props) {
    // console.log(props.movies);

    return (
        <>
            {props.movies.map((item) => {
                return item.lstCumRap.map((item) => {
                    return item.danhSachPhim.map((item) => {
                        return (
                            <div className="col-4">
                                <MoviesItem
                                    tenPhim={item.tenPhim}
                                    hot={item.hot}
                                    ngayChieuGioChieu={item.lstLichChieuTheoPhim
                                        .slice(0, 8)
                                        .map((item) =>
                                            item.ngayChieuGioChieu.slice(11),
                                        )}
                                    tenRap={[
                                        ...new Set(
                                            item.lstLichChieuTheoPhim.map(
                                                (item) => item.tenRap,
                                            ),
                                        ),
                                    ]}
                                    hinhAnh={item.hinhAnh}
                                ></MoviesItem>
                            </div>
                        );
                    });
                });
            })}
            <div>sadasd</div>
        </>
    );
}

export default MovieList;
