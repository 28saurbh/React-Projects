import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'messageSlice',
    initialState: {
        message: []
    },
    reducers: {
        setMessage: (state, action) => {
            // state.message = action.payload;
            state.message.push(action.payload)
        }
    }
})
export default messageSlice.reducer;

export const {setMessage} = messageSlice.actions;