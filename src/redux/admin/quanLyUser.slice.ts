import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LayDanhSachNguoiDung, XoaNguoiDung, capNhatUser, layDanhSachLoaiNguoiDung, layThongTinUser, themNguoiDung } from '../../service';

export const getUsersThunk = createAsyncThunk("getUsersThunk",async (keyword:string) => {
    try {
        const data = await LayDanhSachNguoiDung(keyword);
        console.log(data.content)
        return data.content;
    } catch (e: any) {
        console.log(e.response?.data);
    }
});

export const getUsersTypeThunk = createAsyncThunk('getUsersTypeThunk',async ()=>{
    try {
        const data = await layDanhSachLoaiNguoiDung();
        console.log(data.content)
        return data.content;
    } catch (e: any) {
        console.log(e.response?.data);
    }
})



export const addUserThunk = createAsyncThunk("addUserThunk", async (payload: any) => {
    try {
        const result = await themNguoiDung(payload);
        console.log("result", result.data.content);
        alert('Thêm người dùng hành công')
    } catch (e: any) {
        console.log(e.response?.data);
    }
});

export const deleteUserThunk = createAsyncThunk('deleteUserThunk', async (taiKhoan:string)=>{
    try {
        const result = await XoaNguoiDung(taiKhoan);
        console.log("update", result.data.content);
        
    } catch (e: any) {
        console.log(e.response?.data);
    }
})

export const getUserInfoThunk = createAsyncThunk(
    "getUserInfoThunk",
    async (taiKhoan: string) => {
        try {
            const result = await layThongTinUser(taiKhoan);
            return result.data.content
        } catch (e: any) {
            console.log(123415)
            console.log(e.response?.data);
        }
    },
);

export const updateUserThunk = createAsyncThunk("updateUserThunk", async (payload:any) => {
    try {
        const result = await capNhatUser(payload);
        console.log("result", result.data.content);
        alert('Cập nhật người dùng thành công')
    } catch (e: any) {
        console.log(e.response?.data);
    }
});





const initialState = {
    userList: [],
    usersType: [],
    userInfo: {},
}

const QuanLyUserSlice = createSlice({
  name: "QuanLyUserSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(getUsersThunk.fulfilled,(state,{payload})=>{
        state.userList = payload
    })
    .addCase(getUsersTypeThunk.fulfilled,(state,{payload})=>{
        state.usersType = payload
    })
    .addCase(getUserInfoThunk.fulfilled,(state,{payload})=>{
        state.userInfo = payload
    })
  }
});

export const {} = QuanLyUserSlice.actions

export const QuanLyUserReducer = QuanLyUserSlice.reducer;