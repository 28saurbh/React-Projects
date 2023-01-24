import React, {useRef} from 'react'
import SearchIcon from '../icons/search.svg';

function Heading(props) {

    const inputbox = useRef();

    function updateChild(e){
        props.name(e.target.innerHTML);
    }

    function search(e){
        props.searchCall(inputbox.current.value);
    }

    return (
        <header>
            <div className="main-heading">
                <h1>Gand Fadu <span className='khabar'>खबर</span></h1>
                <div className="search-box">
                    <input type="text" placeholder='Search...' ref={inputbox}/>
                    <button onClick={search}><img src={SearchIcon} alt="" /></button>
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