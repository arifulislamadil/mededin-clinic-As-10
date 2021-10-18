import React from 'react';
import { BsFillTelephoneFill, BsFillHouseFill, BsFillEnvelopeFill } from "react-icons/bs";
import "./Contact.css"

const Contact = () => {
    return (
        <div className="form-full pt-3 pb-3">
            <p className="sub-title"><span>----</span>Contact<spap>----</spap></p>
            <h3 className="text-center fw-bold">Get in touch to Mededin Clinic</h3>

            <div className="container overfolw-contact text-light">
                <div className="row bg-color">
                    <div className="col-md-6 p-2">
                        <div className="p-4">
                            <div className="contact-info">
                                <span><BsFillHouseFill /></span>
                                <h6>Address</h6>
                                Visit us at: <br />
                                Example.com<br />
                                Box 564, Disneyland<br />
                                USA
                            </div>
                            <div className="contact-info">
                                <span><BsFillTelephoneFill /></span>
                                <h6>Phone</h6>
                                <p>+663843943893</p>
                            </div>
                            <div className="contact-info">
                                <span><BsFillEnvelopeFill /></span>
                                <h6>Email</h6>
                                <p>Medanin.Clinic@gmail.com</p>
                            </div>

                        </div>

                    </div>

                    <div className="col md-6 contact-form form-body mt-3">
                        <div className="form-text p-2">

                            <br />
                            <input className=" form-control" type="text" placeholder="Your Name" /><br />
                            <input className="mt-1 form-control" type="text" placeholder="Your Email Address" /><br />
                            <textarea className="mt-1 mb-0 form-control" name="" id="" cols="30" rows="10" placeholder="Type Your Message Here"></textarea>
                            <button className='btn-contact mt-2 form-control' >Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Contact;