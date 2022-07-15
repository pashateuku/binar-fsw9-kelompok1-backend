import React from 'react';
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import HomeContent from '../Components/HomePage/HomeContent';
import Footer from "../Components/Global/Footer";

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