import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill, BsEnvelope, BsChevronDoubleRight, BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container pt-5 pb-2">
                <div className="row text-white">
                    <div className="col-md-4 footer-contact pt-3 pb-3">
                        <div>
                            <img src="https://demo.web3canvas.com/themeforest/medenin/images/foot-logo.png" alt="" />
                        </div>
                        <p>Medenin Clinic is an organized medical service offering diagnostic, therapeutic, or preventive outpatient services. Often, the term covers an entire medical teaching centre</p>
                        <div>
                            <span><BsFillTelephoneFill /> 3123 456 7890 </span>
                        </div>
                        <div>
                            <span><BsEnvelope /> info@mededin.com </span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <h4 className="text-success">Quick Links</h4>
                                <ul className="footer-links">
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Our Services</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Blogs & News</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Contact Us</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4 className="text-success">Our Services</h4>
                                <ul className="footer-links">
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Pediatrics</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Dermatology</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Cardiology</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Psychological</a>
                                    </li>
                                    <li>
                                        <BsChevronDoubleRight />
                                        <a href="/">Surgery</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-md-4 footer-social">
                                <div className="foot-link-box footlink-box_btn p-3">
                                    <a href="/" className="mt-2 btn btn-outline-success w-100">Find a Doctor</a>
                                    <br />

                                    <a href="/" className="mt-2 btn btn-outline-success w-100">Career</a>
                                    <br />
                                    <a href="/" className="mt-2 btn btn-outline-success w-100">Newsletter</a>
                                    <ul className="mt-3">
                                        <li>
                                            <a href="/"><BsFacebook /></a>
                                        </li>
                                        <li>
                                            <a href="/"><BsInstagram /></a>
                                        </li>
                                        <li>
                                            <a href="/"><BsTwitter /></a>
                                        </li>
                                        <li>
                                            <a href="/"><BsLinkedin /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-5 mb-2 text-success footer border border-secondary border-bottom-0 border-start-0 border-end-0">
                    <p className=" mb-0 text-center">© 2021 Mednenin, All Rights Reserved. Design By Ariful Islam Adil</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;