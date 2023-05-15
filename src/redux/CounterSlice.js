import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "kalpesh"
    },
    reducers: {
        increment: (state, action) => {
            console.log(action)
            state.number += action.payload
        },
        decrement: (state, action) => {
            state.number -= action.payload
        }
    }
})

export const { increment, decrement } = CounterSlice.actions


// always export reducers from slice
export default CounterSlice.reducer;