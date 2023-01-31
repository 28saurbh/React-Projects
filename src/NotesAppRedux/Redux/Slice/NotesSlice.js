import { createSlice } from '@reduxjs/toolkit'

const NotesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes: [],
    },
    reducers: {
        createNote: (state, action) => {
            state.notes.push(action.payload);
        },

        deleteNote: (state, action) =>{
            state.notes = state.notes.filter(item => item.id !== action.payload)
        },

        updateNote: (state, action) => {
            const user = state.notes.find(user => user.id == action.payload.id);
            user.title = action.payload.title;
        }
    }
})

export default NotesSlice.reducer;
export const {createNote, deleteNote, updateNote} = NotesSlice.actions;