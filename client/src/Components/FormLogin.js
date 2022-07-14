import React from 'react';
//IMPORT GLOBAL STYLING
import '../Assets/css/LoginForm.css';

function FormLogin() {
    return (
        <>
            <div className='form-content-right'>
                <form className='form'>
                    <h1>Login your account by filling out the information below.</h1>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Username
                        </label>
                        <input id='username' type="text" name="username" className='form-input' placeholder='Enter your username' />
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input id='password' type="password" name="password" className='form-input' placeholder='Enter your password' />
                    </div>
                    <button className='form-input-btn' type='submit'>Login</button>
                    <p className='form-input-login'>Dont have an account? Register <a href='/'>here</a></p>
                </form>
            </div>
        </>
    )
}

export default FormLogin;