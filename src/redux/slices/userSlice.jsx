import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser:{}
  },
  reducers: { 
    addOrder(state,action){
      state.orders.push(action.payload);
    },
    cancelOrder(state,action){

    },
    setUser(state,action){
      state.loggedInUser = action.payload;
    },
    unSetUser(state,action){
      state.loggedInUser = {};
      // return {};
    }
  },
});

export const {addOrder, setUser,unSetUser,cancelOrder} = userSlice.actions;

export { userSlice };
