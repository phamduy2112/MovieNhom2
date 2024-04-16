import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteFilm, getProduct, layThongTinPhim, themPhimUpLoadHinh, updateFilm } from "../../service";

export const getFilmsThunk = createAsyncThunk("getFilmsThunk", async (tenPhim:string='') => {
    try {
        const data = await getProduct(tenPhim);
        return data.content;
    } catch (e: any) {
        console.log(e.response?.data);
    }
});

export const getFilmInfoThunk = createAsyncThunk(
    "getFilmInfoThunk",
    async (id: string) => {
        try {
            const data = await layThongTinPhim(id);
            console.log('thunk')
            return data.content;
        } catch (e: any) {
            console.log(e.response?.data);
        }
    },
);


export const addFilmThunk = createAsyncThunk("addFilmThunk", async (formData: FormData) => {
    try {
        const result = await themPhimUpLoadHinh(formData);
        console.log("result", result.data.content);
        alert('Thêm phim thành công')
    } catch (e: any) {
        console.log(e.response?.data);
    }
});

export const updateFilmThunk = createAsyncThunk("updateFilmThunk", async (formData: FormData) => {
  try {
      const result = await updateFilm(formData);
      console.log("update", result.data.content);
      
      
  } catch (e: any) {
      console.log(e.response?.data);
  }
});

export const deleteFilmThunk = createAsyncThunk('deleteFilmThunk', async (maPhim:number|string)=>{
    try {
        const result = await deleteFilm(maPhim);
        console.log("update", result.data.content);
        
    } catch (e: any) {
        console.log(e.response?.data);
    }
})

const initialState = {
    arrFilmDefault: [],
    filmInfo: {},
};

const QuanLyPhimSlice = createSlice({
    name: "QuanLyPhimSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsThunk.fulfilled, (state, { payload }) => {
                state.arrFilmDefault = payload;
            })
            .addCase(getFilmInfoThunk.fulfilled, (state, { payload }) => {
                state.filmInfo = payload;
            });
    },
});

export const {} = QuanLyPhimSlice.actions;

export const QuanLyPhimReducer = QuanLyPhimSlice.reducer;

