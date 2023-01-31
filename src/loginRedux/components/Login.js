import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Login() {

    const username = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const users = useSelector(state => state.loginReducer.users);

    function HandleClick(e) {
        console.log(users);
        e.preventDefault();
        const auth = users.find((user) => user.username === username.current.value && user.password === password.current.value);
        
        if(auth){
            console.log("success");
        }
        else{
            console.log("failed");
        }
    }

    return (
        <div>
            <form>
                <input type="text" ref={username} />
                <input type="text" ref={password} />
                <button type="submit" onClick={HandleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login