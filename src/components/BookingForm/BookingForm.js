import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import './BookingForm.css';

const BookingForm = () => {
    return (
        <div className="container">
            <h1>I'm from book now</h1>
            <div className="row">
                <div className="col-md-12">
                    <ul className="booking-form">
                        <li><input type="text" class="form-control" placeholder="Enter Your Name" />
                            <span><BsFillPersonFill /></span>
                        </li>
                        <li><input type="text" class="form-control" placeholder="Enter Your Name" />
                            <span><BsFillPersonFill /></span>
                        </li>
                        <li><input type="text" class="form-control" placeholder="Enter Your Name" />
                            <button>Book-Now</button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;