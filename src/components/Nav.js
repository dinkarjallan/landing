import React from 'react';
import './Stylesheets/Nav.css';

const Nav = () => {
    return (
        <div className="navbar">
            <p className="nav-brand">EthletiX</p>
            <div className="nav-list">
                <a href="/shop" className="nav-link">shop</a>
                <a href="/cart" className="nav-link">cart</a>
                <a href="/cart" className="nav-link">profile</a>
            </div>
        </div>
    )
}

export default Nav;