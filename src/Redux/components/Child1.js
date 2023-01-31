import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { setMessage } from '../redux/slice/messageSlicer';

function Child1() {


    const inputText = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(setMessage(inputText.current.value));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputText}/>
                <button type="submit" onSubmit={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default Child1