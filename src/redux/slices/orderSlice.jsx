import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: { 
    checkoutOrder(state,action){
      state.currentOrder = action.payload;
    },
    
  },
});

export const {checkoutOrder} = orderSlice.actions;

export { orderSlice };
