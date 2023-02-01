import { createSlice } from "@reduxjs/toolkit";


const TotalSlice = createSlice({
    name: 'TotalSlice',

    initialState: {
        totalQuantity: 0,
        totalPrice: 0,
    },

    reducers: {

        incrementTotal: (state, action) => {
            state.totalQuantity += 1;
            state.totalPrice += action.payload;
        },
        decrementTotal: (state, action) => {
            state.totalQuantity -= 1;
            state.totalPrice -= action.payload;
        }
    }
})

export default TotalSlice.reducer;
export const { incrementTotal, decrementTotal } = TotalSlice.actions;