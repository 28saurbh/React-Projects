import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Delete_btn from '../icon/delete.png'
import {deleteNote, updateNote} from '../Redux/Slice/NotesSlice'


function ShowNotes() {

    const textInput = useRef();

    const note = useSelector((state) => state.NotesReducer.notes);
    const dispatch = useDispatch()

    function removeNote(id){
        console.log(id);
        dispatch(deleteNote(id));
    }

    function updateNotes( id, title) {
        // event.preventDefault();
        console.log(title);
        dispatch(updateNote({
            title: textInput.current.value,
            id: id,
        }))
    }

    const renderCard = (props) => {
        const id = props.id;
        return (
            <div className="card" key={id}>
                <textarea type="text" defaultValue={props.title} ref={textInput}/>
                {/* <h4>{props.title}</h4> */}
                {props.id}
                <button className='buttom' onClick={() => updateNotes(id, props.title)}>update</button>
                <div className="buttom">
                    <button className='delete' onClick={() => removeNote(id)}><img src={Delete_btn} alt="" />
                    </button>
                </div>

            </div>
        )

    }

   

    return (
        <>
            {note.map(renderCard)}
        </>
    )
}

export default ShowNotes