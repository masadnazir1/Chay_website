import React, { useState } from 'react';
import './Header.css';
import cart from './cart.png';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            </div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/tea" onClick={toggleMenu}>Tea</Link></li>
                    <li><Link to="/coffee" onClick={toggleMenu}>Coffee</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                </ul>
            </nav>
            <div className="user-actions">
                <a href="#" className="login">Login</a>
                <a href="#" className="signup">Sign Up</a>
                <a href="#" className="cart"><img src={cart} alt='cart' className="cart"></img></a>
            </div>
        </header>
    );
};

export default Header;
