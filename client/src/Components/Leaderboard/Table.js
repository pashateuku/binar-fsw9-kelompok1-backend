import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Table() {
    return (
        <>
            <div className='container bg-light'>
                <div className='row mx-3'>
                    <div className='col-md'>
                        <table class="table">
                            <thead class="table-dark text-center">
                                <tr>
                                    <th>RANK</th>
                                    <th>ID</th>
                                    <th>USERNAME</th>
                                    <th>EMAIL</th>
                                    <th>POINT</th>
                                    <th colspan="1" scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className='text'>
                                    <th>1</th>
                                    <th>218</th>
                                    <th>Dimasagung</th>
                                    <th>dimas@gmail.com</th>
                                    <th>500</th>
                                    <th><NavLink to='/home/profile'><Button color='danger' outline>Profile</Button></NavLink></th>
                                </tr>
                                <tr className='text'>
                                    <th>2</th>
                                    <th>198</th>
                                    <th>Coping</th>
                                    <th>coping@gmail.com</th>
                                    <th>478</th>
                                    <th><NavLink to='/home/profile'><Button color='danger' outline>Profile</Button></NavLink></th>
                                </tr>
                                <tr className='text'>
                                    <th>3</th>
                                    <th>148</th>
                                    <th>Haris</th>
                                    <th>Masris@gmail.com</th>
                                    <th>400</th>
                                    <th><NavLink to='/home/profile'><Button color='danger' outline>Profile</Button></NavLink></th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Table