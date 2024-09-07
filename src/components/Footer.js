import React from 'react';

const Footer = () => (
  <footer className="row">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida...
          </p>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2>Latest Blog</h2>
          {/* Add BlogSection Component here */}
        </div>
        <div className="col-md-2 col-sm-6">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h2>Contact Address</h2>
          <address className="md-margin-bottom-40">
            Nagan Communications<br/>
            Phone: +91 9443682111<br/>
            Email: nagantv111@gmail.com<br/>
            Web: <a href="http://www.schengensolutions.com">www.schengensolutions.com</a><br/>
          </address>
        </div>
      </div>
    </div>
    <div className="copy row">
      <div className="container">
        <p>
          2015 © All Rights Reserved | Designed and developed by 
          <a href="https://www.smarteyeapps.com" target="_blank" rel="noopener noreferrer">
            <img src="https://www.smarteyeapps.com/assets/images/ico.png" alt="Smarteye Technologies Logo" /> 
            Smarteye Technologies
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
