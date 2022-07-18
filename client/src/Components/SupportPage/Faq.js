import React from 'react';
import '../../Assets/css/Faq.css'

function Faq() {
    return (
        <>
            <div className='container-fluid bg-light min-vh-100'>
                <div className='row'>
                    <div className='title-faq text-center py-5'>
                        <h1>FAQ</h1>
                        <h3>How can we help you ?</h3>
                    </div>
                </div>
                <div className='container bg-light'>
                    <div className='row mx-5'>
                        <div className='col-md-10'>
                            <input class="form-control me-2" type="search" placeholder="Describe your issue" aria-label="Search" />
                        </div>
                        <div className='col-md-2'>
                            <button class="btn btn-outline-danger btn-leader" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <div className='container bg-light'>
                    <div className='row px-5 py-5'>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Register Error
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Make sure your already input all the data.</strong> You must fill in all the required data such as email, username, and password. and make sure the username has not been registered before .
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Login Error
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Make sure the username and password are correct.</strong> Make sure the username and password you entered are correct, or you can try forgot password when you forget your password.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Where Game List
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Game list is already on navigation bar.</strong> You can click game list on navigation bar list.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Game Achievement
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Play some game.</strong> or do the task in accordance with the explanation of the existing achievement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq