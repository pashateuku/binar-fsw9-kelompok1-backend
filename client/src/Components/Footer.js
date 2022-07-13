import React from 'react';
//IMPORT LOGO IMAGES
import NavbarLogo from '../Assets/images/logoteamone.png';
//IMPORT GLOBAL STYLING
import '../Assets/css/Footer.css';


function Footer() {
  return (
    <>
      <footer>
        <div className='footer-content'>
          <h4>TEAM<span> ONE</span></h4>
          <p>All designs and source code are the result of group collaboration team one</p>
          <img className='logo' src={NavbarLogo} alt="logo"/>
        </div>
        <div className='footer-bottom'>
          <p>Copyright &copy;2022 Team <span>One</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer;