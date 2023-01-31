import { createSlice } from "@reduxjs/toolkit";


const loginslice = createSlice({

    name: "loginslice",

    initialState: {

        users: [{
            username: "sourabh",
            password: "12345"
        }]
    },

    reducers: {
        setMessage: (state, action) => {
            // state.message = action.payload;
            state.users.push(action.payload)
        }
    }

})

export default loginslice.reducer;