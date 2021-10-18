import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">

                <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                    <div class="main-title">
                        <span>We are here for you</span>
                        <h1>
                            What Makes Us Better, Makes You Better.
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            ipsum dolor sit amet.
                        </p>
                        <Link to="/" className="btn btn-primary" tabindex="-1">Make Appointment</Link>
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