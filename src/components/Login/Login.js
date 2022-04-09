import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'
const auth = getAuth(app);
const Login = () => {
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <h3>Please login</h3> 
            <div style={{ margin: "20px" }}>
            <button onClick={() => signInWithGoogle()} >Google Sign In</button> 
            </div>

            <form >
                
                <input type="email" name="" placeholder='Your Email' id="" /> <br />
                <input type="password" placeholder='your password' /> <br />
                <input type="submit" value='Login' /> 
            </form>
        </div>
    );
};

export default Login;