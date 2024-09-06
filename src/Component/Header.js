import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // Debugging statement
  return (
    <header>
            <div className="header-top row d-none d-sm-block">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-8">
                            <ul className="head-links">
                               
                                <li><i className="fas fa-phone-square"></i> +91-7053477493</li>
                                <li>
                                    <a href='https://bit.ly/3Mbmv2y'>
                                    <i className="fas fa-map-marker-alt"></i> Noida, Uttar Pradesh </a></li>
                                    <li><a className='col' href=' mailto:support@example.com'><i className="fas fa-envelope"></i> sales@yanshtechnologies.in</a></li>
                            </ul>
                        </div>
                        {/* <div className="col-sm-4">
                            <ul className="social-links">
                                <li><i className="fab fa-facebook-f"></i></li>
                                <li><i className="fab fa-twitter"></i></li>
                                <li><i className="fab fa-google-plus-g"></i></li>
                                <li><i className="fab fa-linkedin-in"></i></li>
                                <li><i className="fab fa-pinterest-p"></i></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>

            <nav id="nav-head" class="row" style={{ zIndex: 'auto', position: 'static', top: 'auto' }}>

                <div class="container">
                    <div class="row">
                      
                        <div class="col-md-3 col-sm-4">
                         <a href="">
                         <img src="assets/images/logo.png" alt="Logo"/>
                       </a>
                        </div>
                        <div class="col-md-9 col-sm-8">
                           
                            <a data-toggle="collapse" data-target="#menu" href="#menu"><i class="fas d-block d-sm-none small-menu fa-bars"></i></a>
                            <ul>
        <li><a href='/'>Home</a></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
                            
                        </div>
                        
                    </div>
                </div>

            </nav>
            <div style={{display: 'flex', width: '4420px', float: 'none'}}></div>
        </header>
  );
}

export default Header;
