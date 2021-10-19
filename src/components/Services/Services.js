import React, { useEffect, useState } from 'react';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, []);
    return (
        <div className="container mt-5 mb-5">
            <div className="sub-title text-center">
                <p><span>----</span>Our Services<span>----</span></p>
            </div>
            <h2 className="text-center fw-bold">High Quality Services for You</h2>

            <div className="row">
                {
                    services.map(service => <ServicesDetails key={service.id} service={service} ></ServicesDetails>)
                }
            </div>
        </div>

    );
};

export default Services;