import React from 'react';
//IMPORT COMPONENTS
import Navbar from '../Components/Navbar';
import FormLogin from '../Components/FormLogin';
import Footer from '../Components/Footer'
//IMPORT IMAGE
import Watch from '../Assets/images/wd.png';
//IMPORT GLOBAL STYLING
import '../Assets/css/LoginForm.css';

function Login() {
    return (
        <>
            <Navbar />
            <div className='container-fluid bg'>
                <div className='row'>
                    <div className='col'>
                        <div className='form-container'>
                            <div className='form-content-left'>
                                <img src={Watch} alt="watch" className='form-img' />
                            </div>
                            <FormLogin />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;