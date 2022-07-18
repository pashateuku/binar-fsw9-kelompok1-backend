import React from 'react'
import PP from '../../Assets/images/pp.jpg';
import '../../Assets/css/Profile.css'

function Profile() {
    return (
        <>
            <div className='container-fluid d-flex bg-light min-vh-100'>
                <div className='row bg-light'>
                    <div className='col-5 pt-5 px-5'>
                        <div className='card'>
                            <img className='profile-pict' src={PP} alt="profile" />
                        </div>
                    </div>
                    <div className='col-7 pt-5 px-5'>
                        <h1>Halaman Data Informasi</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Profile