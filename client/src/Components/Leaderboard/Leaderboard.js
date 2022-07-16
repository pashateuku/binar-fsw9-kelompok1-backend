import React from 'react';
//IMPORT CSS
import '../../Assets/css/Leaderboard.css';

function Leaderboard() {
    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='row py-5'>
                    <div className='col-12 text-center'>
                        <h1>TOP PLAYERS </h1>
                    </div>
                </div>
                <div className='row mb-3 mx-5'>
                    <div className='col-10'>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                    <div className='col-2'>
                        <button class="btn btn-outline-danger btn-leader" type="submit">Search</button>
                    </div>
                </div>
                <div className='row pb mx-3'>
                    <div className='col-md'>
                        <table class="table">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th>RANK</th>
                                    <th>ID</th>
                                    <th>USERNAME</th>
                                    <th>EMAIL</th>
                                    <th>POINT</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className='text'>
                                    <th>1</th>
                                    <th>218</th>
                                    <th>Dimasagung</th>
                                    <th>dimas@gmail.com</th>
                                    <th>500</th>
                                </tr>
                                <tr className='text'>
                                    <th>2</th>
                                    <th>198</th>
                                    <th>Coping</th>
                                    <th>coping@gmail.com</th>
                                    <th>478</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaderboard