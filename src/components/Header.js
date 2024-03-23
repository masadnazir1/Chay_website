import React from 'react';
import './Header.css'; // 
import cart from './cart.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="your_logo.png" alt="Logo" />
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tea</a></li>
                    <li><a href="#">Coffee</a></li>
                    <li><a href="#">About</a></li>
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
