import React from 'react'
import Dot from '../../Assets/images/dota.jpg';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';

import '../../Assets/css/Content.css'
const Dota = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-warning ptb'>
                <div className='row'>
                    <div className='col-6 px-5 py-5'>
                        <h1>DOTA</h1>
                    </div>
                    <div className='col-6 px-5 py-5'>
                        <img className='img-content' src={Dot} alt='img' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dota