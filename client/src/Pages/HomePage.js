import React from 'react';
//IMPORT COMPONENTS
import Navhome from '../Components/Navhome';
import HomeContent from '../Components/HomeContent';
import Footer from "../Components/Footer";

function HomePage() {
    return (
        <>
            <Navhome />
            <HomeContent />
            <Footer />
        </>
    )
}

export default HomePage