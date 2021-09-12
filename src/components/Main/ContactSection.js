import React from 'react';
import './ContactSection.css'

const ContactSection = () => {
    return (
        <section className="contact">
            <article className="contact-info">
                <h2 className="info-heading">Contact Us</h2>
                <div className="info-item">
                    <span className="mail"></span>
                    <p>contact@ethletix.com</p>
                </div>
                <div className="info-item">
                    <span className="location"></span>
                    <p>SCO-70, phase-4, Mohali, Punjab</p>
                </div>
                <div className="info-item">
                    <span className="phone"></span>
                    <p>+91 0000000000</p>
                </div>
            </article>
            <article className="contact-form">
                <h2 className="form-heading">Or, We'll contact you..</h2>
                <form action="" >
                    <div className="form-input name">
                        <label htmlFor="name">Name</label><br />
                        <input id="name" type="text" name="name" autoComplete="off" />
                    </div>
                    <div className="form-input email">
                        <label htmlFor="email">Email</label><br />
                        <input id="email" type="email" name="email" />
                    </div>
                    <button type="submit">Contact me</button>
                </form>
            </article>
        </section>
    )
}

export default ContactSection;
