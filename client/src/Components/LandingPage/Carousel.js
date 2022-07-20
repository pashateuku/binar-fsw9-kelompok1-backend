import React from 'react';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT LOGO IMAGES
import Cyber from '../../Assets/images/cyber.jpg';
import Gta from '../../Assets/images/gta.jpg';
import Watch from '../../Assets/images/wd.png';
//IMPORT GLOBAL STYLING
import '../../Assets/css/Carousel.css'

function Carousel() {
    return (
        <>
            <div className='container-fluid bg ptb'>
                <div className='row px-4'>
                    <div className='col-5 px-5 hero-desc'>
                        <h1>TEAM <span>ONE</span> PRODUCTION</h1><hr />
                        <p>Are you ready for the unique game all the world ? prepare yourself and play the game</p>
                        <a href='/'><Button color='danger'>REGISTER NOW !</Button></a>
                    </div>
                    <div className='col-7 px-5'>
                        <div id="carousel-side" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner box-shadow">
                                <div class="carousel-item active">
                                    <img src={Cyber} class="d-block w-100" alt="game1" />
                                </div>
                                <div class="carousel-item">
                                    <img src={Gta} class="d-block w-100" alt="game2" />
                                </div>
                                <div class="carousel-item">
                                    <img src={Watch} class="d-block w-100" alt="game3" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-side" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carousel-side" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel;