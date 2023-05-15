import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './CounterSlice'
import ProfileSlice from "./ProfileSlice";
import ProductSlice from "./ProductSlice";

const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        profile: ProfileSlice,
        product: ProductSlice
    }
})

export default Store;