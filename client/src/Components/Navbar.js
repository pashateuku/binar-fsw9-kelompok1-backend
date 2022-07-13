import React from 'react';
//IMPORT LOGO IMAGES
import NavbarLogo from '../Assets/images/logoteamone.png';
//IMPORT GLOBAL STYLING
import '../Assets/css/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          {/* logo navbar */}
          <a className='navbar-brand' href='/'>
            <img className='logo' src={NavbarLogo} alt="logo"/>
            <h4 className='navbar-text'>TEAM<span> ONE</span></h4>
          </a>
          {/* hamburger button */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          {/* navbar list */}
          <div className='collapse navbar-collapse list-text' id='navbarSupportedContent'>
            <ul className="navbar-nav m-auto mb-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">LIST GAME</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="/">SUPPORT</a>
              </li>
            </ul>
            {/* button login and register */}
            <ul class="navbar-nav">
              <li class="nav-item mx-3">
                <a class="nav-link" href="/">REGISTER</a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="/">LOGIN</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;