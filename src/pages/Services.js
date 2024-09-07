// src/Services.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/style.css'; // Ensure this path matches where you put your CSS files

const Services = () => {
  return (
    <div className="container-fluid">
      {/* Header */}
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
                  <img src="assets/images/logo.jpg" alt="Logo" />
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

      {/* Page Navigation */}
      <div className="page-nav row">
        <div className="container">
          <div className="row">
            <h2>Our Services</h2>
            <ul>
              <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
              <li><i className="fas fa-angle-double-right"></i> Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <section className="wat-we-do row">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-globe"></i>
              <br />
              <b>Webdesign & Development</b>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-globe"></i>
              <br />
              <b>E-commerce Solutions</b>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fab fa-android"></i>
              <br />
              <b>Mobile App Development</b>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-wrench"></i>
              <br />
              <b>SEO & Digital Marketing</b>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-cubes"></i>
              <br />
              <b>ERP Solutions</b>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fab fa-envira"></i>
              <br />
              <b>Opensource Applications</b>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h2>Latest Blog</h2>
              <div className="row blog-ro">
                <div className="col-sm-3 col-3 blog-foot-img no-padding">
                  <img src="assets/images/blog/blog_1.jpg" alt="Blog 1" />
                </div>
                <div className="col-sm-9 col-9 blog-foot-cont">
                  <b>Latest Technology News</b>
                  <p>02-Nov-2018</p>
                </div>
              </div>
              {/* Repeat for other blog entries */}
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
                Nagan Comunications<br />
                Phone : +91 9443682111<br />
                Email : nagantv111@gmail.com<br />
                Web : www.schengensolutions.com<br />
              </address>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copy row">
        <div className="container">
          <p>2015 © All Rights Reserved Designed and developed by 
            <a href="https://www.smarteyeapps.com"> 
              <img src="https://www.smarteyeapps.com/assets/images/ico.png" alt="SmarteyeTechnologies" />
              SmarteyeTechnologies
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
