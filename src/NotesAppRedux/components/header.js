import React from 'react'
import search_icon from '../icon/search.png'

function header() {
    return (
        <header>
            <div className='first_heading'>
                <h2>Notes</h2>
                <button className='btn'>Toggle Mode</button>
            </div>
            <div className="search-box">
                <img src={search_icon} alt="" />
                <input type="text" placeholder='type to search..'/> 
            </div>
        </header>
    )
}

export default header