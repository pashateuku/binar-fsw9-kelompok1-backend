import React from 'react'
//IMPORT COMPONENT
import { Button } from 'reactstrap'
import ProfileAchievement from './ProfileAchievement';
//IMPORT ICONS
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa'
//IMPORT ASSETS
import PP from '../../Assets/images/pp.jpg';
import '../../Assets/css/Profile.css'

function Profile() {
    return (
        <>
            <div className='container-fluid bg-light min-vh-100'>
                <div className='row bg-light '>
                    <div className='col-3 pt-5 px-5'>
                        <div className='card pp-section bg-light'>
                            <img className='profile-pict mb-3' src={PP} alt="profile" />
                            <Button className='btn-change-profile' color='danger'>Change Profile Picture</Button>
                        </div>
                        <div className='row'>
                            <ul className='profile-socials'>
                                <li><a className='instagram' href='https://www.instagram.com/'><FaInstagram /></a></li>
                                <li><a className='twitter' href='https://twitter.com/'><FaTwitter /></a></li>
                                <li><a className='tiktok' href='https://www.tiktok.com/'><FaTiktok /></a></li>
                                <li><a className='facebook' href='https://www.facebook.com/'><FaFacebook /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-9 pt-5 px-5 bg-white'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    <h1>USER PROFILE</h1>
                                </div>
                                <div className='col text-end'>
                                    <Button color='danger' outline>Edit profile</Button>
                                </div>
                            </div>
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>Dimas Agung</td>
                                    </tr>
                                    <tr>
                                        <td>Username</td>
                                        <td>Dimasagungw</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>Dimas@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>*********</td>
                                    </tr>
                                    <tr>
                                        <td>Social Media URL</td>
                                        <td><a href='https://www.instagram.com/'>www.instagram.com/akudimas</a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="mb-3">
                                <label className='my-1 text-warning'>About me</label>
                                <textarea class="form-control form-sizing" id="exampleFormControlTextarea1" rows="3">Halo nama saya dimas saya senang berteman dengan siapa saja, ayo bermain bersama dan have fun didalam game</textarea>
                            </div>
                            <div className='row'>
                                <ProfileAchievement />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile