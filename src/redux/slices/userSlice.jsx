import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: { 
    addOrder(state,action){
      state.orders.push(action.payload);
    },
    cancelOrder(state,action){

    }
    
  },
});

export const {addOrder} = userSlice.actions;

export { userSlice };
