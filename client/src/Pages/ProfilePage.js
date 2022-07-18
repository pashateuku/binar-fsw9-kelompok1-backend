import React from 'react'
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import Profile from '../Components/ProfilePage/Profile';
import Footer from "../Components/Global/Footer";

function ProfilePage() {
    return (
        <>
            <Navhome />
            <Profile />
            <Footer />
        </>
    )
}

export default ProfilePage