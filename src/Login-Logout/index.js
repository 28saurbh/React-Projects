import React, { useRef, useState } from 'react';
import './index.css';
import email_logo from './email.png'
import google_logo from './google.png'
import { useNavigate } from 'react-router';



function Index() {

    const database =[
        {
            email: '28saurbh@gmail.com',
            password: '12345'
        }, {
            email: 'xyz@gmail.com',
            password: '12',
        },
        {
            email: '1',
            password: '1',
        }
    ];
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({});
    
    const email = useRef();
    const password = useRef();

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };

    function checkUser(event) {
        event.preventDefault();
        let e = email.current.value;
        let p = password.current.value;

        let userData = database.find((user) =>{
            return user.email === e
        } );

        if(userData){
            if(userData.password === p){
                navigate(`/user/${e}`)
            }
            else{
                setErrorMessages({ name: "pass", message: errors.pass });
            }
        }else{
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    return (
        <div className="container">
            <div className="title">
                <h2>Login</h2>
            </div>
            <form onSubmit={checkUser}>
                <input type="" placeholder="Email" ref={email} />
                {renderErrorMessage("uname")}
                <input type="" placeholder="Password" ref={password} />
                {renderErrorMessage("pass")}
                <button type="submit" className="login">Log-in</button>
                <div className="separator">or</div>
                <button className="btn"> <img src={email_logo} alt="" /> Continue with Google</button>
                <button className="btn"> <img src={google_logo} alt="" /> Continue with Mobile</button>
            </form>
            <div className="new-user">
                New to Zomato? <span>Create account!</span>
            </div>
            
        </div>
    )
}

export default Index