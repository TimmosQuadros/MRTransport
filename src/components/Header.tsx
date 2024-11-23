import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import globeIcon from '../assets/icons/globe.svg';
import userIcon from '../assets/icons/user.svg';
import searchIcon from '../assets/icons/search.svg';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [languageOpen, setLanguageOpen] = useState(false);
    const navigate = useNavigate();

    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setCurrentLang(lng);
        setLanguageOpen(false); // Close the dropdown after selecting a language
    };

    const handleSearchToggle = () => {
        setSearchOpen(!searchOpen);
    };

    const handleSearchClose = () => {
        setSearchOpen(false);
        setSearchQuery(''); // Optionally clear the search query
    };

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${searchQuery}`);
            handleSearchClose(); // Close the search bar after submitting
        }
    };

    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img src="/logo.png" alt="MR Transport Logo" />
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="menu">
                    <Link to="/why">Hvorfor MR Transport</Link>
                    <Link to="/solutions">Vores Løsninger</Link>
                    <Link to="/sustainability">Bæredygtighed</Link>
                    <Link to="/career">Karriere</Link>
                </nav>

                {/* Icons with Tooltips */}
                <div className="icons">
                    <div className="icon-wrapper" onClick={() => setLanguageOpen(!languageOpen)}>
                        <img src={globeIcon} alt="Language" />
                        <span className="tooltip">Vælg land</span>
                    </div>
                    {languageOpen && (
                        <select
                            value={currentLang}
                            onChange={(e) => changeLanguage(e.target.value)}
                            className="language-switch"
                        >
                            <option value="en-US">English</option>
                            <option value="da-DK">Dansk</option>
                        </select>
                    )}
                    <div className="icon-wrapper">
                        <img src={userIcon} alt="My Profile" />
                        <span className="tooltip">MyMRT</span>
                    </div>
                    <div className="icon-wrapper">
                        <img
                            src={searchIcon}
                            alt="Search"
                            onClick={handleSearchToggle}
                            style={{ cursor: 'pointer' }}
                        />
                        <span className="tooltip">Søg på MRT</span>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            {searchOpen && (
                <div className="search-bar">
                    <form onSubmit={handleSearchSubmit} style={{ flex: 1 }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                    <button
                        className="close-button"
                        onClick={handleSearchClose}
                        aria-label="Close search"
                    >
                        X
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
