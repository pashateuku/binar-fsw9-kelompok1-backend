import React from 'react';
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import Sidebar from '../Components/HomePage/Sidebar';
import Footer from "../Components/Global/Footer";

function HomePage() {
    return (
        <>
            <Navhome />
            <Sidebar />
            <Footer />
        </>
    )
}

export default HomePage