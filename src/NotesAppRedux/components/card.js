
import React from 'react'
import ShowNotes from './ShowNotes';
import New_Card from './newCard'

function Card() {

    return (
        <div className='card-container'>
            <ShowNotes/>
            <New_Card/>
        </div>
    )
}

export default Card;