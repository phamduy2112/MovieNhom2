import { createSlice, configureStore } from '@reduxjs/toolkit'
const GetIconTheater = createSlice({
    name: 'getIcon',
    initialState: {
      value: 'BHDStar'
    },
    reducers: {
      setIcon:(state, { payload }) => {
        state.value = payload;
    },
    }
  })
  export const {setIcon} = GetIconTheater.actions;


  export const getIconTheater = GetIconTheater.reducer;