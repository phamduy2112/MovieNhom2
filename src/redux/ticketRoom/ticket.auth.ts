import { createSlice } from '@reduxjs/toolkit'
const GetTiketRoom = createSlice({
    name: 'getTiket',
    initialState: {
      tiket: [],
      button:false,
    },
    reducers: {
        setTicketChair:(state, { payload }) => {
           const index= state.tiket.findIndex((item:never)=>item.maGhe==payload.maGhe);
            if(index!==-1){

               state.tiket.splice(index,1);
                
      
            }
           state.tiket.push(payload)
            // console.log(index);
             
           
            
        
    },
    }
  })
  export const {setTicketChair} = GetTiketRoom.actions;


  export const getTiketRoom = GetTiketRoom.reducer;