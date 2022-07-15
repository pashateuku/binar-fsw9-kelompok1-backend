import React from 'react';
//IMPORT GLOBAL STYLING
import '../../Assets/css/HomeContent.css'
//IMPORT COMPONENTS PAGES
import OurGames from '../Global/OurGames';

function HomeContent() {
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <OurGames />
                </div>
            </div>
        </>
    )
}

export default HomeContent