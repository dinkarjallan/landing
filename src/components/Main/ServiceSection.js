import React from 'react';
import './ServiceSection.css';

const ServiceSection = () => {
    return (
        <section className="services">
            <div className="service-text">
                <h2 className="service-heading">Services</h2>
                <div className="service-desc">
                    <p>We as fitness enthusiasts, understand the importance of sports gear as well as the undying need of good diet, and best practices. <br />Especially in time where everybody is throwing out the same piece of advice for everyone. So, we as responsible individuals, bring all the help one can need. We provide services like</p>
                    <ul>
                        <li>Diet consultation</li>
                        <li>Performance Analysis,</li>
                        <li>Curated Exercise Scheduling,</li>
                        <li>Online Personal training,</li>
                        <li>Regular follow ups by your personal supervisor, and more...</li>
                    </ul>
                    <p>Search for services, or Contact us and let us guide you towards a better future</p>
                </div>
                <form className="service-CTA" action="/shop">
                    <button type="submit">More Services<span className="arrow">&#10140;</span></button>
                </form>
            </div>
        </section>
    )
}

export default ServiceSection;