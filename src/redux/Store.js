import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './CounterSlice'
import ProfileSlice from "./ProfileSlice";

const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        profile: ProfileSlice
    }
})

export default Store;