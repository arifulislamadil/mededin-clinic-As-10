import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="container mt-5 mb-5 not-found-back">
            <div className=" p-5 not-found-style">
                <div className="not-style">
                    <h1 className="text-danger">ERROR 404 NOT FOUND</h1>
                    <p className="text-white ps-5 pe-5 mt-5">You may have mis-typed the URL.
                        Or the page has been removed.<br />
                        Actually, there is nothing to see here...
                        Click on the links below to do something,<br /> Thanks!</p>
                    <button className="btn-back-home ms-5"><Link className="text-decoration-none text-light" to="/home">Back to Home </Link></button>

                </div>

            </div>
        </div>

    );
};

export default NotFound;