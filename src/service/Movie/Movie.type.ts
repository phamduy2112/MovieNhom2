

export interface MoviesAPI {
  lstCumRap: LstCumRap[];
}
interface LstCumRap {
  danhSachPhim: DanhSachPhim[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  mahom: string;
}
export interface DanhSachPhim {
  lstLichChieuTheoPhim: LstLichChieuTheoPhim[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

interface LstLichChieuTheoPhim {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
}

// convert
export interface movies{
  lstCumRap: LstCumRap[];
}
interface LstCumRap {
  DanhSachPhimMovies: DanhSachPhimMovies[];

}
 export interface DanhSachPhimMovies {

  maPhim?: number;
  tenPhim: string;
  hinhAnh: string;
  hot: boolean;
  ngayChieuGioChieu: string;
  tenRap: string;
  giaVe?: number;
}