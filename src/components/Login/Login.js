import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const { user, signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please login</h3> 
            <div style={{ margin: "20px" }}>
            <button onClick={signInWithGoogle} >Google Sign In</button> 
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