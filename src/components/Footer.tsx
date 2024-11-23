import React from 'react';
import { Link } from 'react-router-dom';
import twitterIcon from '../assets/icons/twitter.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebook.svg';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Column 1: Our Solutions */}
                <div className="footer__column">
                    <h3 className="footer__title">Our Solutions</h3>
                    <ul className="footer__list">
                        <li><Link to="/fleet" className="footer__link">Fleet</Link></li>
                        <li><Link to="/team" className="footer__link">Team</Link></li>
                        <li><Link to="/services" className="footer__link">Services</Link></li>
                        <li><Link to="/pricing" className="footer__link">Pricing</Link></li>
                    </ul>
                </div>

                {/* Column 2: MR Transport */}
                <div className="footer__column">
                    <h3 className="footer__title">MR Transport</h3>
                    <ul className="footer__list">
                        <li><Link to="/contact" className="footer__link">Contact</Link></li>
                        <li><Link to="/about" className="footer__link">About MR Transport</Link></li>
                        <li><Link to="/career" className="footer__link">Careers</Link></li>
                        <li><Link to="/blog" className="footer__link">Blog</Link></li>
                    </ul>
                </div>

                {/* Column 3: Social Links */}
                <div className="footer__column">
                    <h3 className="footer__title">Social Links</h3>
                    <ul className="footer__list footer__social">
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                                <img src={facebookIcon} alt="Facebook" className="footer__social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                                <img src={linkedinIcon} alt="LinkedIn" className="footer__social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                                <img src={instagramIcon} alt="Instagram" className="footer__social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                                <img src={youtubeIcon} alt="YouTube" className="footer__social-icon" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                                <img src={twitterIcon} alt="Twitter" className="footer__social-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Copyright */}
            <div className="footer__copyright">
                © {new Date().getFullYear()} MR Transport. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;