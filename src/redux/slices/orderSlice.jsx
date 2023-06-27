import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {},
  reducers: { addOrder(state, action) { } },
});

export { orderSlice };
