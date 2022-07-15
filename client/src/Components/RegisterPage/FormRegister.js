import React from 'react';
//IMPORT GLOBAL STYLING
import '../../Assets/css/RegisterForm.css';

function FormRegister() {
    return (
        <>
            <div className='form-content-right'>
                <form action='/register' method='post' className='form'>
                    <h1>Create your account by filling out the information below.</h1>
                    <div className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>
                        <input id='email' type="email" name="email" className='form-input' placeholder='Enter your email' />
                    </div>
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
                    <button className='form-input-btn' type='submit'>Submit</button>
                    <p className='form-input-login'>Already have an account? Login <a href='/login'>here</a></p>
                </form>
            </div>
        </>
    )
}

export default FormRegister;