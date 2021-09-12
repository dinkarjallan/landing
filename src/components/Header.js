import React from 'react';
import './Stylesheets/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="head-title">EthletiX</h1>
                <p className="head-desc">We believe that sports wear should also be as aesthetic as any other clothing. <br />So we present a wide range of sports and gym gear with a hint of world-class aesthetics. Browse our shop and find something that suits your requirements and style.</p>
                <form className="head-CTA" action="/shop">
                    <button type="submit">Go to shop<span className="arrow">&#10140;</span></button>
                </form>
            </div>
        </header>
    )
}

export default Header;