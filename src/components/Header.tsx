import React from 'react';
import { Link } from 'react-router-dom';
import globeIcon from '../assets/icons/globe.svg';
import userIcon from '../assets/icons/user.svg';
import searchIcon from '../assets/icons/search.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img
                            src="/logo.png" /* Logo from public folder */
                            alt="MR Transport Logo"
                        />
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="menu">
                <Link to="/hvorfor-dsv">Hvorfor DSV</Link>
                    <Link to="/losninger">Vores Løsninger</Link>
                    <Link to="/baeredygtighed">Bæredygtighed</Link>
                    <Link to="/karriere">Karriere</Link>
                </nav>

                {/* Icons with Tooltips */}
                <div className="icons">
                    <div className="icon-wrapper">
                        <img src={globeIcon} alt="Language" />
                        <span className="tooltip">Vælg land</span>
                    </div>
                    <div className="icon-wrapper">
                        <img src={userIcon} alt="My Profile" />
                        <span className="tooltip">MyMRT</span>
                    </div>
                    <div className="icon-wrapper">
                        <img src={searchIcon} alt="Search" />
                        <span className="tooltip">Søg på MRT</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
