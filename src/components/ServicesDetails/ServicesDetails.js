import React from 'react';
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
                <a href="/">Read More</a>
            </div>
        </div>
    );
};

export default ServicesDetails;