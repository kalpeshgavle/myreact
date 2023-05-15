import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        userName: "kalpesh"
    },
    reducers: {

    }
})


// always export reducers from slice
export default numberSlice.reducer;