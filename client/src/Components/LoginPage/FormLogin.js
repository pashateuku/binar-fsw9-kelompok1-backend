//IMPORT AXIOS
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//IMPORT GLOBAL STYLING
import '../../Assets/css/LoginForm.css';

function FormLogin() {
    //USESTATE FOR USERNAME AND PASSWORD
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //HANDLE ON SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post('http://localhost:3000/login', {
                username: username,
                password: password
            });
            alert(result.data.message);
            localStorage.setItem('isAuthenticated', true);
        }
        catch (err) {
            alert(err.toString());
        }
    }

    return (
        <>
            <div className='form-content-right radius'>
                <form action='/login' method='post' className='form' onSubmit={handleSubmit}>
                    <h1>Login your account by filling out the information below.</h1>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Username
                        </label>
                        <input id='username' type="text" name="username" className='form-input' placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input id='password' type="password" name="password" className='form-input' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                        <div className='forgot'><a href='/' className='forgot'>Forgot the password</a></div>
                    </div>
                    <button className='form-input-btn' type='submit'>Login</button>
                    <p className='form-input-login'>Dont have an account? Register <NavLink to='/register'>here</NavLink></p>
                </form>
            </div>
        </>
    )
}

export default FormLogin;