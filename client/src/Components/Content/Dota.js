import React from 'react'
import Dot from '../../Assets/images/dota.jpg';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//IMPORT COMPONENTS PAGES
import Sidebar from '../../Components/HomePage/Sidebar';
import Footer from '../../Components/Global/Footer';
import Navhome from '../HomePage/Navhome';
// IMPORT STYLING
import '../../Assets/css/Content.css';


const Dota = () => {
    return (
        <>
            <Navhome />
            <Sidebar />
            <div className='container-fluid bg-white'>
                <div className='row'>
                    <div className='col-6 px-5 py-5 game-text'>
                        <h1 className='text-game-title'>DOTA 2</h1>
                        <p>Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be start defending your ancient now.</p>
                        <div>
                            <Button color="warning" outline size="md">
                                PLAY NOW
                            </Button>
                        </div>
                    </div>
                    <div className='col-6 px-5 py-5 img-game'>
                        <img className='img-content box-shadow' src={Dot} alt='img' />
                    </div>
                </div>
                <div class="row px-5 py-5 bg-light">
                    <div className='pb-3'>
                        <h2 className='text-center fw-bold'>GAME ACHIEVEMENT</h2>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Rampage</h5>
                                <p class="card-text">Get 3 rampages on one match.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Support Master</h5>
                                <p class="card-text">Win as support 10 times.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Crazy Rich</h5>
                                <p class="card-text">Collect 10 items of arcana.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card card-size">
                            <div class="card-body card-custom">
                                <h5 class="card-title">Party Time</h5>
                                <p class="card-text">Play as leader party 10 times.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='text-center mt-2 mb-5'>
                        <NavLink to='./list-game'><Button className='btn-list' color='warning'>SEE ALL GAME ACHIEVEMENT</Button></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dota