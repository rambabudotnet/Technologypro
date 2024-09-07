import React from 'react';
import { Link } from 'react-router-dom';

// Correct paths based on your folder structure
import aboutUsImage from '../assets/images/about_us.png';
import teamMemberImage from '../assets/images/team/team_member_01.jpg';
import blogImage from '../assets/images/blog/blog_1.jpg';

const About = () => {
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
                <Link to="/">
                  <img src={aboutUsImage} alt="Logo" />
                </Link>
              </div>
              <div className="col-md-9 col-sm-8">
                <a data-toggle="collapse" data-target="#menu" href="#menu">
                  <i className="fas d-block d-sm-none small-menu fa-bars"></i>
                </a>
                <ul id="menu" className="nav-links menu-tab">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
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
            <h2>About Next Technology</h2>
            <ul>
              <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
              <li><i className="fas fa-angle-double-right"></i> About Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-us row">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src={aboutUsImage} alt="About Us" />
            </div>
            <div className="col-sm-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              {/* Additional paragraphs */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team row">
        <div className="container">
          <div className="sec-title">
            <h2>Our Team</h2>
            <p>Take a Look at our Team Members</p>
          </div>
          <div className="row">
            {/* Repeat team member block for each team member */}
            <div className="col-sm-3">
              <div className="card-1 team-member">
                <img src={teamMemberImage} alt="Team Member 1" />
                <p><b>Siva Kumar</b> (CEO & Chairman)</p>
                <ul className="row">
                  <li><i className="fab fa-facebook-f"></i></li>
                  <li><i className="fab fa-twitter"></i></li>
                  <li><i className="fab fa-linkedin-in"></i></li>
                  <li><i className="fab fa-google-plus-g"></i></li>
                  <li><i className="fab fa-pinterest-p"></i></li>
                </ul>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="row">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {/* FAQ content */}
            </div>
            <div className="col-sm-6">
              {/* FAQ content */}
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
            <div className="col-md-3 col-sm-6">
              <h2>Latest Blog</h2>
              <div className="row blog-ro">
                <div className="col-sm-3 col-3 blog-foot-img no-padding">
                  <img src={blogImage} alt="Blog 1" />
                </div>
                <div className="col-sm-9 col-9 blog-foot-cont">
                  <b>Latest Technology News</b>
                  <p>02-Nov-2018</p>
                </div>
              </div>
              {/* Add more blog posts */}
            </div>
            <div className="col-md-2 col-sm-6">
              <h2>Quick Links</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h2>Contact Address</h2>
              <address className="md-margin-bottom-40">
                Nagan Comunications<br />
                Phone: +91 9443682111<br />
                Email: nagantv111@gmail.com<br />
                Web: www.schengensolutions.com<br />
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
}

export default About;
