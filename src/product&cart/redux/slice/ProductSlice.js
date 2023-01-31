import { createSlice } from "@reduxjs/toolkit"

const ProductSlice = createSlice({
    name: "productSlice",
    initialState: {
        products: [],
    },
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        }
    }

})

export default ProductSlice.reducer;
export const {setProduct} = ProductSlice.actions;