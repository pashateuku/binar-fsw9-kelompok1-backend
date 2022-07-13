import React from 'react';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT GLOBAL STYLING
import '../Assets/css/LandingPage.css'
//IMPORT COMPONENTS PAGE
import Carousel from './Carousel';
//IMPORT LOGO IMAGES
import Cyber from '../Assets/images/cyber.jpg';
import Gta from '../Assets/images/gta.jpg';
import Watch from '../Assets/images/wd.png';

function HeroLandingPage() {
  return (
    <>
      <Carousel />
      <div className='container-fluid py-5 bg-white'>
        <div className='row mb-5'>
          <div className='col-7'>
            <img src={Cyber} class="img-fluid rounded-3" alt="game1" />
          </div>
          <div className='col-5 px-5 text-end'>
            <h1>CYBERPUNK</h1>
            <p>Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped-up in a do-or-die fight for survival. Explore the dark future, now upgraded with next-gen in mind and featuring free additional content!</p>
            <a href='/' className='me-3'><Button color='danger'>PLAY THE GAME</Button></a>
            <a href='/'><Button color='warning'>SEE DETAILS</Button></a>
          </div>
        </div>
        <div className='row mb-5 bg py-5'>
          <div className='col-5 px-5 text-start'>
            <h1>GRAND THEFT AUTO 5</h1>
            <p>When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry</p>
            <a href='/' className='me-3'><Button color='danger'>PLAY THE GAME</Button></a>
            <a href='/'><Button color='warning'>SEE DETAILS</Button></a>
          </div>
          <div className='col-7'>
            <img src={Gta} class="img-fluid rounded-3" alt="game1" />
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-7'>
            <img src={Watch} class="img-fluid rounded-3" alt="game1" />
          </div>
          <div className='col-5 px-5 text-end'>
            <h1>WATCHDOGS</h1>
            <p>Watch Dogs is an action-adventure game. The player controls hacker Aiden Pearce, who uses his smartphone to control trains and traffic lights, infiltrate security systems, jam cellphones, access pedestrians' private information, and empty their bank accounts.</p>
            <a href='/' className='me-3'><Button color='danger'>PLAY THE GAME</Button></a>
            <a href='/'><Button color='warning'>SEE DETAILS</Button></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroLandingPage;