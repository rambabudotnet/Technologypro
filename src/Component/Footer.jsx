import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'; // Ensure this file exists for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                        </p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Latest Blog</h2>
                        <div className="blog-ro">
                            <div className="blog-foot-img no-padding">
                                <img src="assets/images/blog/blog_1.jpg" alt="Blog 1" />
                            </div>
                            <div className="blog-foot-cont">
                                <b>Latest Technology News</b>
                                <p>02-Nov-2018</p>
                            </div>
                        </div>
                        <div className="blog-ro">
                            <div className="blog-foot-img no-padding">
                                <img src="assets/images/blog/blog_2.jpg" alt="Blog 2" />
                            </div>
                            <div className="blog-foot-cont">
                                <b>Latest Technology News</b>
                                <p>02-Feb-2018</p>
                            </div>
                        </div>
                        <div className="blog-ro">
                            <div className="blog-foot-img no-padding">
                                <img src="assets/images/blog/blog_3.jpg" alt="Blog 3" />
                            </div>
                            <div className="blog-foot-cont">
                                <b>Latest Technology News</b>
                                <p>02-Jan-2018</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })} to="/">Home</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })} to="/about-us">About Us</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })} to="/services">Services</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })} to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink style={({ isActive }) => ({ color: isActive ? 'yellow' : 'white' })} to="/contact-us">Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h2>Contact Address</h2>
                        <address className="md-margin-bottom-40">
                            Nagan Communications<br />
                            Phone: +91 9443682111<br />
                            Email: nagantv111@gmail.com<br />
                            Web: www.schengensolutions.com<br />
                        </address>
                    </div>
                </div>
                <div className="copy row">
                    <div className="container">
                        <p>2024 © All Rights Reserved Designed and developed by 
                            <a href="https://www.smarteyeapps.com">
                                <img src="https://www.smarteyeapps.com/assets/images/ico.png" alt="SmarteyeTechnologies" />
                                SmarteyeTechnologies
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
