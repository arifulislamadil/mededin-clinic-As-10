import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="container">
            <div className="row">

                <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div class="main-title">

                        <h1>
                            What Makes Us Better, Makes You Better.
                        </h1>
                        <p>
                            A clinic is a health facility that is primarily focused on the care of outpatients. Clinics can be privately operated or publicly managed and funded.
                        </p>
                        <Link to="/" className="banner-btn" tabindex="-1">Make Appointment</Link>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                    <div class="anim-container flex-fill">
                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/hero-doctor-1.png" alt="" />

                    </div>
                </div>

            </div>

        </div>
    );
};
export default Banner;