import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: 'productSlice',
    initialState: {
        products: [],
    },
    reducers: {

        addProduct: (state, action) => {
            state.products.push(action.payload);
        },

        incrementCart: (state, action) => {
            const x = state.products.find((item) => item.id === action.payload.id); 
            x.quantity += 1;
            x.total = x.price * x.quantity;
        },

        decrementCart: (state, action) => {
            const x = state.products.find((item) => item.id === action.payload.id);
            x.quantity -= 1;
            x.total = x.price * x.quantity;

            if(x.quantity === 0){
                state.products = state.products.filter((item) => item.id !== action.payload.id)
            }
        }
    }
})

export default ProductSlice.reducer;
export const { addProduct, incrementCart, decrementCart} = ProductSlice.actions;