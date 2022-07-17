import React from 'react'
import { NavLink } from 'react-router-dom';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../Assets/images/logoteamone.png';
//IMPORT ICONS
import { FaUserAlt, FaSignOutAlt } from 'react-icons/fa'
//IMPORT GLOBAL STYLING
import '../../Assets/css/NavHome.css';

function Navhome() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
                <div className='container-fluid'>
                    <div className='col-3'>
                        {/* logo navbar */}
                        <NavLink className='navbar-brand' exact to='/home'>
                            <img className='logo' src={NavbarLogo} alt="logo" />
                            <h4 className='navbar-text'>TEAM<span> ONE</span></h4>
                        </NavLink>
                    </div>
                    <div className='col-6'>
                    </div>
                    {/* button logout */}
                    <div className='col-3'>
                        <div className='collapse navbar-collapse list-text justify-content-end' id='navbarSupportedContent'>
                            <ul class="navbar-nav">
                                <li class="nav-item mx-3">
                                    <a class="nav-link" href="/"><FaUserAlt className='icon-profile' /> PROFILE</a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link" href="/"><FaSignOutAlt className='icon-logout' /> LOGOUT</a>
                                </li>
                            </ul>
                        </div>
                        {/* hamburger button */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navhome