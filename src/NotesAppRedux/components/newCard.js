import React, {useRef} from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { createNote } from '../Redux/Slice/NotesSlice';
import { useDispatch } from 'react-redux';



function NewCard() {

    const textInput = useRef();
        
    const dispatch = useDispatch();


    function CreateNote(event) {
        event.preventDefault();
        dispatch(createNote({
            title: textInput.current.value,
            id: nanoid(5),
        }))
    }

    return (
        <div className='new-card card'>
            <textarea ref={textInput} type="text" rows={9} cols={20} placeholder="Type to add note..."/>
            <div className="buttom">
                <p>200 Remaining</p>
                <button className='btn' onClick={CreateNote}> Save </button>
            </div>
        </div>
    )
}

export default NewCard