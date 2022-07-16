import React from 'react';
//IMPORT COMPONENTS
import Navbar from '../Components/Global/Navbar';
import FormLogin from '../Components/LoginPage/FormLogin';
import Footer from '../Components/Global/Footer'
//IMPORT IMAGE
import bg from '../Assets/images/loregbg.png';
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
                                <img src={bg} alt="bg" className='form-img' />
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