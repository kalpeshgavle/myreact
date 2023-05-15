import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
}
const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {}

})

export default ProductSlice.reducer;