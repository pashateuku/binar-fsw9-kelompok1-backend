import React from 'react';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';

function HomeContent() {

    return (
        <>
            <div className='container-fluid bg-light pb'>
                <div className='row'>
                    <div className='col-2'>
                        <Sidebar />
                    </div>
                    <div className='col-10'>
                        <h1>SUSAH CYOKKK</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeContent