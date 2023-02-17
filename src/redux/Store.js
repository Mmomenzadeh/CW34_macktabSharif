import { configureStore } from "@reduxjs/toolkit";
import ShoppingSlice from "./ShoppingSlice";

export const Store = configureStore({
    reducer : { 

        order : ShoppingSlice

    }
})