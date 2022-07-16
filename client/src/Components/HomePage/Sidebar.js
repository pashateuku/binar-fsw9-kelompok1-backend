import React from 'react';
import '../../Assets/css/Sidebar.css';

function Sidebar() {
    return (
        <>
            <div className='row pt-3 ms-3 home-title'>
                <h5>GAME LIST</h5>
                <hr></hr>
            </div>
            <div className='row'>
                <div className='sidebar'>
                    <a href='/' className='menu-item'><li>GTA 5</li></a>
                    <a href='/' className='menu-item'><li>Fall Guys</li></a>
                    <a href='/' className='menu-item'><li>Dota 2</li></a>
                    <a href='/' className='menu-item'><li>Watch Dogs</li></a>
                    <a href='/' className='menu-item'><li>Valorant</li></a>
                    <a href='/' className='menu-item'><li>Cyberpunk</li></a>
                </div>
            </div>
        </>
    )
}

export default Sidebar