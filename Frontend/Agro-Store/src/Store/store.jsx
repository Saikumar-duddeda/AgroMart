import { configureStore } from "@reduxjs/toolkit";
import allproductS from "./AllproductSlice"
import cartS from "./CartSlice"
import orderSlice from "./OrderSlice"
export const store=configureStore({
    reducer:{
        products:allproductS,
        cart:cartS,
        orders:orderSlice
    }
})