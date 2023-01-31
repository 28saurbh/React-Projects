import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../redux/slice/messageSlicer'


export const store = configureStore({
    reducer: {
        messageReducer
    },
})
