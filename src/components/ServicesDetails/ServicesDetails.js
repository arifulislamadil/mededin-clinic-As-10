import React from 'react';
import { Link } from 'react-router-dom';
import "./ServiceDetails.css"

const ServicesDetails = (props) => {
    const { doctor, service_name, img, description } = props.service;
    return (
        <div className="col-md-4 gy-4 gx-4">
            <div className="service-block blue ">
                <img src={img} alt="" />
                <h3>{service_name}</h3>
                <h4>{doctor}</h4>
                <p>{description.slice(0, 50)}</p>
                <Link to="/services">Read More</Link>
            </div>
        </div>
    );
};

export default ServicesDetails;