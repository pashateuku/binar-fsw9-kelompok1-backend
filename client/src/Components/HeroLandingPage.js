import React from 'react';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT GLOBAL STYLING
import '../Assets/css/LandingPage.css'
//IMPORT COMPONENTS PAGE
import Carousel from './Carousel';
//IMPORT ICONS
import { BiUser, BiIdCard, BiBarChartAlt, BiFace, BiGitMerge, BiJoystick } from 'react-icons/bi'
//IMPORT LOGO IMAGES
import Cyber from '../Assets/images/cyber.jpg';
import Gta from '../Assets/images/gta.jpg';
import Watch from '../Assets/images/wd.png';
import Val from '../Assets/images/valo.jpg';
import Dot from '../Assets/images/dota.jpg';
import Fall from '../Assets/images/fall.jpg';

function HeroLandingPage() {
  return (
    <>
      {/* 1st page */}
      <div className='container-fluid bg-main'>
        <div className='row main-section'>
          <div className='col-lg-12'>
            <div className='title-text'>
              <h1>TEAM<span>ONE</span></h1>
              <p>Play various games from Team One Project and enjoy the fun. <br></br>Hurry up register your account and play the game</p>
            </div>
            <div className='button-main text-center'>
              <a href='/register'><Button color='warning' outline className='button-reg'>REGISTER NOW</Button></a>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd page */}
      <Carousel />
      <div className='container-fluid bg-light ptb2'>
        <div className='row px-5'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiUser className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>JOINED USER</h5>
                  <p className='ms-3 card-desc'> More than 1000 players join the game and play together</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiJoystick className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>MANY GAME</h5>
                  <p className='ms-3 card-desc'> There are several choices of interesting games from all genres that can be played</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiBarChartAlt className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>LEADERBOARD SYSTEM</h5>
                  <p className='ms-3 card-desc'> There is a leaderboard feature to compete with other players</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row px-5 pt-5'>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiFace className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>24 HOURS SUPPORT</h5>
                  <p className='ms-3 card-desc'>We are all ready to help you 24 hours if you need help</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiGitMerge className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>CONNECT SOCIAL MEDIA</h5>
                  <p className='ms-3 card-desc'> The game you play can connect with your social media and can share your game and point</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-6 col-12 text-left'>
            <div className='text-card'>
              <div className='card card-styles'>
                <div className='card-body'>
                  <BiIdCard className='card-icon ms-3' />
                  <h5 className='card-title ms-3'>SAFE PRIVACY</h5>
                  <p className='ms-3 card-desc'> Your privacy data will be safe with us so you can keep playing and have fun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd page */}
      <div className='container-fluid bg-white pt-5 px-5'>
        <div className='row px-5'>
          <div className='col our-text'>
            <h1>OUR GAMES</h1>
            <p>There are many variations of the games you can played.</p>
          </div>
        </div>
        <div className='row px-5'>
          <div className='col-lg-4 mb-4'>
            <img src={Gta} class="img-fluid" alt="game" />
          </div>
          <div className='col-lg-4'>
            <img src={Fall} class="img-fluid" alt="game" />
          </div>
          <div className='col-lg-4'>
            <img src={Dot} class="img-fluid" alt="game" />
          </div>
          <div className='col-lg-4'>
            <img src={Watch} class="img-fluid" alt="game" />
          </div>
          <div className='col-lg-4'>
            <img src={Val} class="img-fluid" alt="game" />
          </div>
          <div className='col-lg-4 mb-3'>
            <img src={Cyber} class="img-fluid" alt="game" />
          </div>
          <div className='text-center mt-2'>
            <Button className='btn-list' color='danger'>SEE ALL GAME LIST</Button>
          </div>
        </div>
      </div>
      {/* 3rd page */}
      <div className='container-fluid py-5 bg-white'>
        <div className='row mb-5'>

        </div>
      </div>
    </>
  )
}

export default HeroLandingPage;