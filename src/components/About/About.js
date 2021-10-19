import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className="container">
            <p className="sub-title "><span>----</span>About Us<spap>----</spap></p>
            <h3 className="text-center mb-4 fw-bold">About Mededin Clinic</h3>
            <div className="sub-header p-5">
                <div className="row p-3">
                    <div className="col-md-6">
                        <div>
                            <img className="img-fluid" src="https://demo.web3canvas.com/themeforest/medenin/images/about-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <h3>Short Story About Mededin Clinic.</h3>
                        <p>Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre, including the hospital and the outpatient facilities. The medical care offered by a clinic may or may not be connected with a hospital</p>
                        <div className="p-5 text-center">
                            <div className="row">
                                <div className="col-md-6 p-2 bg-card-about">
                                    <h3>1000+</h3>
                                    <p>Happy Patients</p>
                                </div>
                                <div className="col-md-6 p-2 bg-card-about">
                                    <h3>215+</h3>
                                    <p>Expert Doctors</p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 p-3 bg-card-about">
                                    <h3>315+</h3>
                                    <p>Hospital Rooms</p>
                                </div>
                                <div className="col-md-6 p-3 bg-card-about">
                                    <h3>106+</h3>
                                    <p>Award Winner</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;