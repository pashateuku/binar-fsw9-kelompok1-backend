import React from 'react';
//IMPORT COMPONENTS
import Navbar from "../Components/Global/Navbar";
import List from '../Components/ListGame/Listgame';
import Footer from "../Components/Global/Footer";

function Listgame() {
    return (
        <>
            <Navbar />
            <List />
            <Footer />
        </>
    )
}

export default Listgame