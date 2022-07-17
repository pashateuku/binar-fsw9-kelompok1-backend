import React from 'react'
import Watch from '../../Assets/images/wd.png';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';

const Watchdogs = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-warning'>
                <div className='row'>
                    <div className='col-6 px-5 py-5'>
                        <h1>Watch Dogs</h1>
                    </div>
                    <div className='col-6 px-5 py-5'>
                        <img className='img-content' src={Watch} alt='img' />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Watchdogs