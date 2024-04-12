export interface showTimesAPI {
    lstCumRap: LstCumRap[];
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    mahom: string;
  }
export interface showTimes {
    lstCumRap: LstCumRap[];

    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    mahom: string;
  }
   interface LstCumRap {
    danhSachPhim: DanhSachPhim[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
  }
   interface DanhSachPhim {
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