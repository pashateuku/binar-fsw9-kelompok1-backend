import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
//IMPORT COMPONENTS
import Navhome from '../Components/HomePage/Navhome';
import ListGame from '../Components/ListGame/Listgame';
import Sidebar from '../Components/HomePage/Sidebar';
import Footer from "../Components/Global/Footer";

function HomePage() {
    Swal.fire({
        icon: 'info',
        title: 'Notification',
        text: 'Please Login First',
        confirmButtonColor: '#dc3545',
        iconColor: '#343a40'
    })

    const navigate = useNavigate();
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');

        isAuthenticated ? alert('User Already Login') : <Swal />;

        if (isAuthenticated) {
            navigate('/home');
        } else {
            navigate('/login')
        }
    }, [])

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