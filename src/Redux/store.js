import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice"
const store = configureStore({
    reducer:{
        cart : cartReducer,
        product:productReducer,
    }
})

export default store;