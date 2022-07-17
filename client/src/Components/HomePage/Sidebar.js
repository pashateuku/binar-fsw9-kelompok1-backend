import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Assets/css/Sidebar.css';

function Sidebar() {
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-12 list-menu'>
                        <NavLink to='/home'><li>Home</li></NavLink>
                        <NavLink to='/game/gta'><li>Gta 5</li></NavLink>
                        <NavLink to='/game/fall-guys'><li>Fall Guys</li></NavLink>
                        <NavLink to='/game/dota'><li>Dota 2</li></NavLink>
                        <NavLink to='/game/watch-dogs'><li>Watch Dogs</li></NavLink>
                        <NavLink to='/game/valorant'><li>Valorant</li></NavLink>
                        <NavLink to='/game/cyber-punk'><li>Cyberpunk</li></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar