import React from 'react';
import { NavLink } from 'react-router-dom';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../Assets/images/logoteamone.png';
//IMPORT GLOBAL STYLING
import '../../Assets/css/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <div className='container-fluid'>
          <div className='col-3'>
            {/* logo navbar */}
            <a href='/' className='navbar-brand'>
              <img className='logo' src={NavbarLogo} alt="logo" />
              <h4 className='navbar-text'>TEAM<span> ONE</span></h4>
            </a>
          </div>
          <div className='col-6'>
            {/* navbar list */}
            <div className='collapse navbar-collapse list-text' id='navbarSupportedContent'>
              <ul className="navbar-nav m-auto mb-lg-0">
                <li className="mx-3 text-nav">
                  <NavLink exact to="/" activeClassName="active">HOME</NavLink>
                </li>
                <li className="mx-3">
                  <NavLink to="/list-game" activeClassName="active">LIST GAME</NavLink>
                </li>
                <li className="mx-3">
                  <NavLink to="/leaderboard" activeClassName="active">LEADERBOARD</NavLink>
                </li>
                <li className="mx-3">
                  <NavLink to="/support" activeClassName="active">SUPPORT</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* button login and register */}
          <div className='col-3'>
            <div className='collapse navbar-collapse list-text justify-content-end' id='navbarSupportedContent'>
              <ul class="navbar-nav">
                <li class="nav-item mx-3">
                  <NavLink to="/register" activeClassName="active">REGISTER</NavLink>
                </li>
                <li class="nav-item mx-3">
                  <NavLink to="/login" activeClassName="active">LOGIN</NavLink>
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

export default Navbar;