
export interface TLichChieuAPI {
  heThongRapChieu: HeThongRapChieu[];
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  ngayKhoiChieu: string;
  danhGia: number;
}
export interface TLichChieu {
  heThongRapChieu: HeThongRapChieu[];
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
  ngayKhoiChieu: string;
  danhGia: number;
}

   interface HeThongRapChieu {
    cumRapChieu: CumRapChieu[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
  }

  interface CumRapChieu {
    lichChieuPhim: LichChieuPhim[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
  }
  interface LichChieuPhim {
    maLichChieu: string;
    maRap: string;
    tenRap: string;
    ngayChieuGioChieu: string;
    giaVe: number;
    thoiLuong: number;
  }