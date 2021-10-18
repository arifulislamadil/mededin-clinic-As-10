import React from 'react';

const Team = () => {
    return (
        <div className="container mt-3">
            <div className=" text-center">
                <p className="sub-title"><span>----</span>Our Team<span>----</span></p>
                <h3>Our Dedicated Doctors</h3>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div>
                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/team3.jpg" alt="" />
                        <h4>Dr. Mary Joe</h4>
                        <p>Dental Specialist</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/team2.jpg" alt="" />
                        <h4>Thomas Jack</h4>
                        <p>Neurology Specialist</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/team5.jpg" alt="" />
                        <h4>Dr. Mary Joe</h4>
                        <p>Cardiologist Specialist</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <img src="https://demo.web3canvas.com/themeforest/medenin/images/team1.jpg" alt="" />
                        <h4>Dr.Faoji</h4>
                        <p> Neurology Specialist</p>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Team;