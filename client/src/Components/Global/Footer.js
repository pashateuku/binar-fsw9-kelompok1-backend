import React from 'react';
//IMPORT LOGO IMAGES
import NavbarLogo from '../../Assets/images/logoteamone.png';
//IMPORT GLOBAL STYLING
import '../../Assets/css/Footer.css';
//IMPORT ICONS
import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';


function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 px-5 my-3 logo-area'>
              <div>
                <img className='logo-footer' src={NavbarLogo} alt="logo" />
                <h4>TEAM<span> ONE</span></h4>
              </div>
            </div>
            <div className='col-md-4 px-5 my-3'>
              <ul className='socials'>
                <li><a className='tik' href='https://www.tiktok.com/'><FaTiktok /></a></li>
                <li><a className='ig' href='https://www.instagram.com/'><BsInstagram /></a></li>
                <li><a className='yt' href='https://www.youtube.com/'><BsYoutube /></a></li>
                <li><a className='fb' href='https://www.facebook.com/'><BsFacebook /></a></li>
              </ul>
            </div>
            <div className='col-md-4 px-5 my-3 footer-text-area'>
              <div>
                <p>All designs and source code are the result of group collaboration team one</p>
                <p>Copyright &copy;2022 Team <span>One. </span>All Rigths Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;