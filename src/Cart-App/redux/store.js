import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/productSlice'
import TotalSlice from './slice/TotalSlice'

export const store = configureStore({

    reducer: {
        productReducer,
        TotalSlice,
    },
})