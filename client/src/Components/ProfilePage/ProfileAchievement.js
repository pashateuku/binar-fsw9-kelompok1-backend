import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//IMPORT ICON
import { FaBattleNet, FaNapster, FaSkyatlas, FaTeamspeak } from "react-icons/fa";
// IMPORT STYLING
import '../../Assets/css/Profile.css'

function ProfileAchievement() {
    return (
        <>
            <div class="row px-5 py-5 bg-white">
                <div className='pb-3'>
                    <h2 className='text-center fw-bold'>USER ACHIEVEMENT</h2>
                </div>
                <div class="col-sm-3">
                    <div class="card card-size-profile">
                        <div class="card-body card-custom">
                            <FaBattleNet className='card-icon ms-3' id='icon-achievement' />
                            <h5 class="card-title">Right Back At Ya</h5>
                            <p class="card-text">Kill or incapacitate an enemy who threw a grenade at you.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card card-size-profile">
                        <div class="card-body card-custom">
                            <FaNapster className='card-icon ms-3' id='icon-achievement' />
                            <h5 class="card-title">True Soldier</h5>
                            <p class="card-text">Kill or incapacitate 300 enemies using ranged weapons.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card card-size-profile">
                        <div class="card-body card-custom">
                            <FaSkyatlas className='card-icon ms-3' id='icon-achievement' />
                            <h5 class="card-title">Stanislavski's Method</h5>
                            <p class="card-text">Use a dialogue option related to V's life path 10 times.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="card card-size-profile">
                        <div class="card-body card-custom">
                            <FaTeamspeak className='card-icon ms-3' id='icon-achievement' />
                            <h5 class="card-title">Two Heads, One Bullet</h5>
                            <p class="card-text">Kill or incapacitate 2 enemies with the same sniper rifle shot.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='text-center mt-2 mb-5'>
                    <NavLink to='./list-game'><Button className='btn-list btn-all-game'>SEE ALL GAME ACHIEVEMENT</Button></NavLink>
                </div>
            </div>
        </>
    )
}

export default ProfileAchievement