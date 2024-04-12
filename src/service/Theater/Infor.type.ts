export interface TListInfoTheaterAPI {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: TItemInfoTheaterAPI[];
  }
 export interface TItemInfoTheaterAPI {
    maRap: number;
    tenRap: string;
  }
export interface TListInfoTheater {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: TItemInfoTheater[];
  }
 export interface TItemInfoTheater {
    maRap: number;
    tenRap: string;
  }