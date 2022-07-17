import React from 'react';
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import ListGame from '../Components/ListGame/Listgame';
import Sidebar from '../Components/HomePage/Sidebar';
import Footer from "../Components/Global/Footer";

function HomePage() {
    return (
        <>
            <Navhome />
            <Sidebar />
            <ListGame />
            <Footer />
        </>
    )
}

export default HomePage