import React from 'react';
// import './Main.css';
import ServiceSection from './ServiceSection';
// import Carousel from './Carousel';
import ContactSection from './ContactSection';

const Main = () => {
    return (
        <main className="main">
            <ServiceSection />
            {/* <Carousel /> */}
            <ContactSection />
        </main>
    )
}

export default Main;