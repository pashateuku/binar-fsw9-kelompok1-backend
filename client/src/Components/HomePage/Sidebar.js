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
                        <a href='/'><li>Fall Guys</li></a>
                        <NavLink to='/game/dota'><li>Dota 2</li></NavLink>
                        <a href='/'><li>Watch Dogs</li></a>
                        <NavLink to='/game/valo'><li>Valorant</li></NavLink>
                        <a href='/'><li>Cyberpunk</li></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar