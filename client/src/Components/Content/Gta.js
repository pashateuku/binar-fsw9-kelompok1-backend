import React from 'react'
import GTA5 from '../../Assets/images/gta.jpg';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';

const Gta = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-warning'>
                <div className='row'>
                    <div className='col-6 px-5 py-5'>
                        <h1>GTA 5</h1>
                    </div>
                    <div className='col-6 px-5 py-5'>
                        <img className='img-content' src={GTA5} alt='img' />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Gta