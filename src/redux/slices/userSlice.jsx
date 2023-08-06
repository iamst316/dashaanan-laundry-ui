import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addOrder(state, action) {
      state.orders.push(action.payload);
    },
    cancelOrder(state, action) {

    },
    setUser(state, action) {
      return action.payload;

    },
    unSetUser(state, action) {
      // state.loggedInUser = {};
      return {};
    }
  },
});

export const { addOrder, setUser, unSetUser, cancelOrder } = userSlice.actions;

export { userSlice };
