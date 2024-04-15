import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LayDanhSachNguoiDung } from '../../service';

export const getUsersThunk = createAsyncThunk("getUsersThunk",async () => {
    try {
        const data = await LayDanhSachNguoiDung();
        console.log(data.content)
        return data.content;
    } catch (e: any) {
        console.log(e.response?.data);
    }
});

const initialState = {
    userList: []
}

const QuanLyUserSlice = createSlice({
  name: "QuanLyUserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getUsersThunk.fulfilled,(state,{payload})=>{
        state.userList = payload
    })
  }
});

export const {} = QuanLyUserSlice.actions

export const QuanLyUserReducer = QuanLyUserSlice.reducer;