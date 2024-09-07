import React from 'react';
import './PortfolioPage.css'; // Assuming you create a separate CSS file for styles

function PortfolioPage() {
  return (
    <div className="container-fluid">
      {/* Header Starts Here */}
      <header>
        <div className="header-top row d-none d-sm-block">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <ul className="head-links">
                  <li><i className="fas fa-envelope"></i> info@nexttechnologies.com</li>
                  <li><i className="fas fa-phone-square"></i> +9159669599</li>
                  <li><i className="fas fa-map-marker-alt"></i> Kollamcode, Marthandam</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="social-links">
                  <li><i className="fab fa-facebook-f"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                  <li><i className="fab fa-google-plus-g"></i></li>
                  <li><i className="fab fa-linkedin-in"></i></li>
                  <li><i className="fab fa-pinterest-p"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav id="nav-head" className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <a href="index.html">
                  <img src="/assets/images/logo.jpg" alt="Logo" />
                </a>
              </div>
              <div className="col-md-9 col-sm-8">
                <a data-toggle="collapse" data-target="#menu" href="#menu">
                  <i className="fas d-block d-sm-none small-menu fa-bars"></i>
                </a>
                <ul id="menu" className="nav-links menu-tab">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about_us.html">About Us</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="contact_us.html">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Header Ends Here */}

      {/* Page Navigation Starts Here */}
      <div className="page-nav row">
        <div className="container">
          <div className="row">
            <h2>Our Portfolio</h2>
            <ul>
              <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
              <li><i className="fas fa-angle-double-right"></i> Portfolio</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Page Navigation Ends Here */}

      {/* Gallery Starts Here */}
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="gallery-filter d-none d-sm-block">
              <button className="btn btn-default filter-button" data-filter="all">All</button>
              <button className="btn btn-default filter-button" data-filter="hdpe">Finance</button>
              <button className="btn btn-default filter-button" data-filter="sprinkle">Digital Marketing</button>
              <button className="btn btn-default filter-button" data-filter="spray">Money</button>
              <button className="btn btn-default filter-button" data-filter="irrigation">Business Analysis</button>
            </div>
            <br/>
            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img src="/assets/images/gallery/gallery_01.jpg" className="img-responsive" alt="" />
            </div>
            {/* Repeat other gallery items similarly */}
          </div>
        </div>
      </div>
      {/* Gallery Ends Here */}

      {/* Footer Starts Here */}
      <footer className="row">
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
              {/* Blog entries */}
            </div>
            <div className="col-md-2 col-sm-6">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h2>Contact Address</h2>
              <address className="md-margin-bottom-40">
                Nagan Communications<br/>
                Phone: +91 9443682111<br/>
                Email: nagantv111@gmail.com<br/>
                Web: www.schengensolutions.com<br/>
              </address>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Ends Here */}

      {/* Copyright Starts Here */}
      <div className="copy row">
        <div className="container">
          <p>2015 © All Rights Reserved Designed and developed by 
            <a href="https://www.smarteyeapps.com">
              <img src="https://www.smarteyeapps.com/assets/images/ico.png" alt="" /> SmarteyeTechnologies
            </a>
          </p>
        </div>
      </div>
      {/* Copyright Ends Here */}

    </div>
  );
}

export default PortfolioPage;
