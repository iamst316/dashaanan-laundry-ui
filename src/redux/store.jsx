import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        order: orderSlice.reducer,
    },
});

export default store;
