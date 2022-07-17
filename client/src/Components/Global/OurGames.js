import React from 'react'
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//IMPORT GLOBAL STYLING
import '../../Assets/css/OurGames.css'
//IMPORT LOGO IMAGES
import Cyber from '../../Assets/images/cyber.jpg';
import Gta from '../../Assets/images/gta.jpg';
import Watch from '../../Assets/images/wd.png';
import Val from '../../Assets/images/valo.jpg';
import Dot from '../../Assets/images/dota.jpg';
import Fall from '../../Assets/images/fall.jpg';

function OurGames() {
    return (
        <>
            <div className='container-fluid bg-white pt-5 px-5'>
                <div className='row px-5'>
                    <div className='col our-text'>
                        <h1>OUR GAMES</h1>
                        <p>There are many variations of the games you can played.</p>
                    </div>
                </div>
                <div className='row px-5 mb-4'>
                    <div className='col-lg-4 box'>
                        <img src={Gta} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Fall} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Dot} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row px-5 mb-3'>
                    <div className='col-lg-4'>
                        <img src={Watch} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Val} class="img-fluid" alt="game" />
                    </div>
                    <div className='col-lg-4'>
                        <img src={Cyber} class="img-fluid" alt="game" />
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <NavLink to='./list-game'><Button className='btn-list' color='danger'>SEE ALL GAME LIST</Button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurGames