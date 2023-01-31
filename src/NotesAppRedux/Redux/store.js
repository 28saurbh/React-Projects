import { configureStore } from "@reduxjs/toolkit";
import NotesReducer from "./Slice/NotesSlice";

export const store = configureStore({
    reducer:{
        NotesReducer,
    }
})