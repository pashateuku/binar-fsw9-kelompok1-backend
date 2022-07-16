import React from 'react';
//IMPORT COMPONENTS PAGES
import Sidebar from '../HomePage/Sidebar';

function HomeContent() {
    return (
        <>
            <div className='container-fluid bg-light pb'>
                <div className='row'>
                    <div className='col-2'>
                        <Sidebar />
                    </div>
                    <div className='col-10'>
                        <h1>INI HALAMAN GAME YANG DI KLIK</h1>
                    </div>


                </div>
            </div>
        </>
    )
}

export default HomeContent