import React from 'react'
import SearchIcon from '../icons/search.svg';

function Heading(props) {

    function updateChild(e){
        props.name(e.target.innerHTML);
    }

    return (
        <header>
            <div className="main-heading">
                <h1>Gand Fadu <span className='khabar'>खबर</span></h1>
                <div className="search-box">
                    <input type="text" placeholder='Search...' />
                    <img src={SearchIcon} alt="" />
                </div>
            </div>
            <nav>
                <ul>
                    <li onClick={updateChild}>Home</li>
                    <li  onClick={updateChild}>Sports</li>
                    <li  onClick={updateChild}>Business</li>
                    <li onClick={updateChild}>Technology</li>
                    <li onClick={updateChild}>Science</li>
                    <li onClick={updateChild}>Health</li>
                </ul>
            </nav>
        </header >
    )
}

export default Heading