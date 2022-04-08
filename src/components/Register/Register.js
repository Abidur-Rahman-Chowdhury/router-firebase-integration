import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form >
                <input type="text"  placeholder='Your Name'/> <br />
                <input type="email" name="" placeholder='Your Email' id="" /> <br />
                <input type="password" placeholder='your password' />
                <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;