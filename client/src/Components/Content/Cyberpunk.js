import React from 'react'
import Cyber from '../../Assets/images/cyber.jpg';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';

const Cyberpunk = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-warning'>
                <div className='row'>
                    <div className='col-6 px-5 py-5'>
                        <h1>Cyberpunk</h1>
                    </div>
                    <div className='col-6 px-5 py-5'>
                        <img className='img-content' src={Cyber} alt='img' />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cyberpunk