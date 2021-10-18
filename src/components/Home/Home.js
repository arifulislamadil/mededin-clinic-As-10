import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Team from '../Team/Team';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Team></Team>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;