import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./slices/orderSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        order: orderSlice.reducer,
        user : userSlice.reducer,
    },
});

export default store;
