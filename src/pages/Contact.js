import React from 'react';
import './ContactUs.css'; // Import CSS if using a separate stylesheet

const ContactUs = () => {
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
                  <li><a href="index.html">Home </a></li>
                  <li><a href="about_us.html">About Us</a></li>
                  <li><a href="services.html">Services </a></li>
                  <li><a href="portfolio.html">Portfolio </a></li>
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
            <h2>Contact Us</h2>
            <ul>
              <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
              <li><i className="fas fa-angle-double-right"></i> Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div style={{ paddingTop: '110px', backgroundColor: '#FFF', padding: '30px' }} className="about-cc row">
        <div className="container">
          <div className="row bfvf abou">
            <h4>Contact Us</h4>
          </div>
          <div className="row">
            <div style={{ marginTop: '20px' }} className="col-sm-7 for-cnt">
              <form action="http://hbntv.in/home/addContact" method="post">
                <div className="row">
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label>Enter Name</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <input required name="name" className="form-control input-sm" placeholder="Enter Name" type="text" />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label>Mobile Number</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <input required name="mobile" className="form-control input-sm" placeholder="Enter Mobile Number" type="text" />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label>Email Address</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <input name="email" className="form-control input-sm" placeholder="Enter Email Address" type="text" />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label>Subject</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <select className="form-control input-sm">
                      <option>Enquiry</option>
                      <option>Need Support</option>
                      <option>Sales Enquiry</option>
                    </select>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label>Message</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <textarea required name="message" className="form-control input-sm" style={{ resize: 'none' }}></textarea>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                  </div>
                  <div className="col-sm-9">
                    <button style={{ fontSize: '13px' }} className="btn card btn-sm btn-default"><b>Submit</b></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-5 about-tt">
              <b>Address</b>
              <address className="md-margin-bottom-40">
                Roos Street, Randy Colany<br />
                Newberg, Italy <br />
                Phone: +31 8987657665456<br />
                Email: info@nexttechnologies.com<br />
                Web: www.nexttechnologies.com<br />
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="row">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.</p>
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
              <div className="row blog-ro">
                <div className="col-sm-3 col-3 blog-foot-img no-padding">
                  <img src="assets/images/blog/blog_2.jpg" alt="Blog 2" />
                </div>
                <div className="col-sm-9 col-9 blog-foot-cont">
                  <b>Latest Technology News</b>
                  <p>02-Feb-2018</p>
                </div>
              </div>
              <div className="row blog-ro">
                <div className="col-sm-3 col-3 blog-foot-img no-padding">
                  <img src="assets/images/blog/blog_3.jpg" alt="Blog 3" />
                </div>
                <div className="col-sm-9 col-9 blog-foot-cont">
                  <b>Latest Technology News</b>
                  <p>02-Jan-2018</p>
                </div>
              </div>
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
};

export default ContactUs;
