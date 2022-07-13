import React from 'react';
//IMPORT LOGO IMAGES
import Cyber from '../Assets/images/cyber.jpg';
import Gta from '../Assets/images/gta.jpg';
import Watch from '../Assets/images/wd.png'

function HeroLandingPage() {
  return (
    <>
        <img src={Cyber} class="d-block w-100" alt="cyber"/>
        <img src={Gta} class="d-block w-100" alt="gta"/>
        <img src={Watch} class="d-block w-100" alt="wd"/>
    </>
  )
}

export default HeroLandingPage;