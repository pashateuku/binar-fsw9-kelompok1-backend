import React from 'react';
//IMPORT COMPONENTS
import Navbar from '../Components/Navbar';
import FormRegister from '../Components/FormRegister';
import Footer from '../Components/Footer'
//IMPORT IMAGE
import Watch from '../Assets/images/wd.png';
//IMPORT GLOBAL STYLING
import '../Assets/css/RegisterForm.css';

function Register() {
    return (
        <>
            <Navbar />
            <div className='container-fluid bg'>
                <div className='row'>
                    <div className='col'>
                        <div className='form-container'>
                            <FormRegister />
                            <div className='form-content-left'>
                                <img src={Watch} alt="watch" className='form-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register