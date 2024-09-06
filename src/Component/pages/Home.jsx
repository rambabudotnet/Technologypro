import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div id="slider" className="slider row">
      {/* START REVOLUTION SLIDER 3.1 rev5 fullwidth mode */}
     {/* ************************* Slider Starts Here ************************** */}
     <div id="slider" className="slider row">
      {/* START REVOLUTION SLIDER 3.1 rev5 fullwidth mode */}
      <div className="fullwidthbanner-container">
        <div className="fullwidthbanner">
          <ul>
            {/* SLIDE 1 */}
            <li data-transition="fade" data-slotamount="7" data-masterspeed="300">
              {/* MAIN IMAGE */}
              <img
                src="assets/images/slider/slide-02-bg.jpg"
                data-fullwidthcentering="on"
                alt="slidebg2"
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption uppercase big_font_size boldest_font_weight dark_font_color sft start"
                data-x="440"
                data-y="125"
                data-speed="300"
                data-start="1600"
                data-easing="easeOutExpo"
              >
                <span className="accent-color">We provide Solutions</span> <br />
                that you need!
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption medium_font_size regular_font_weight dark_font_color sfl start"
                data-x="440"
                data-y="208"
                data-speed="300"
                data-start="1900"
                data-easing="easeOutExpo"
              >
                The best template to get you started
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption mini_font_size light_font_weight gray_font_color sfr start"
                data-x="440"
                data-y="250"
                data-speed="300"
                data-start="2200"
                data-easing="easeOutExpo"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                <br />
                accusantium doloremque laudantium, totam rem aperiam.
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption sfb start"
                data-x="440"
                data-y="314"
                data-speed="300"
                data-start="2500"
                data-easing="easeOutExpo"
              >
                <a href="#" className="tp-caption btn-success nb-jkj btn-large border-btn btn-gray">
                  Purchase This Now
                </a>
              </div>

              {/* LAYER NR. 5 */}
              <div
                className="tp-caption sfl start"
                data-x="60"
                data-y="bottom"
                data-speed="1000"
                data-start="1000"
                data-easing="Power1.easeOut"
              >
                <img src="assets/images/slider/slide-02-image-01.png" alt="" />
              </div>
            </li>

            {/* SLIDE 2 */}
            <li data-transition="fade" data-slotamount="7" data-masterspeed="300">
              {/* MAIN IMAGE */}
              <img
                src="assets/images/slider/slide-03-bg.jpg"
                data-fullwidthcentering="on"
                alt="slidebg3"
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfl start"
                data-x="left"
                data-y="110"
                data-speed="300"
                data-start="1600"
                data-easing="easeInOutExpo"
              >
                Fully Responsive & Retina Ready
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfr start"
                data-x="left"
                data-y="150"
                data-speed="300"
                data-start="1900"
                data-easing="easeInOutExpo"
              >
                Built Twitter Bootstrap 3
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfl start"
                data-x="left"
                data-y="190"
                data-speed="300"
                data-start="2200"
                data-easing="easeInOutExpo"
              >
                Tons of Shortcodes
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfr start"
                data-x="left"
                data-y="230"
                data-speed="300"
                data-start="2500"
                data-easing="easeInOutExpo"
              >
                Touchable Sliders
              </div>

              {/* LAYER NR. 5 */}
              <div
                className="tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfl start"
                data-x="left"
                data-y="270"
                data-speed="300"
                data-start="2800"
                data-easing="easeInOutExpo"
              >
                Wide and Boxed Layout
              </div>

              {/* LAYER NR. 6 */}
              <div
                className="tp-caption mini_font_size bold_font_weight dark_font_color gray_bg sfr start"
                data-x="left"
                data-y="310"
                data-speed="300"
                data-start="3100"
                data-easing="easeInOutExpo"
              >
                Built With HTML5 and CSS3
              </div>

              {/* LAYER NR. 7 */}
              <div
                className="tp-caption sfr start"
                data-x="center"
                data-y="60"
                data-hoffset="100"
                data-speed="600"
                data-start="1000"
                data-easing="easeOutBack"
                style={{ zIndex: 2 }}
              >
                <img src="assets/images/slider/slide-03-image-01.png" alt="" />
              </div>

              {/* LAYER NR. 8 */}
              <div
                className="tp-caption sfl start"
                data-x="right"
                data-y="70"
                data-hoffset="-100"
                data-speed="600"
                data-start="1300"
                data-easing="easeOutBack"
                style={{ zIndex: 1 }}
              >
                <img src="images/slide-03-image-02.png" alt="" />
              </div>
            </li>

            {/* SLIDE 3 */}
            <li data-transition="fade" data-slotamount="7" data-masterspeed="300">
              {/* MAIN IMAGE */}
              <img
                src="assets/images/slider/slide-01-bg.jpg"
                data-fullwidthcentering="on"
                alt="slidebg1"
                data-bgfit="cover"
                data-bgposition="center center"
                data-bgrepeat="no-repeat"
              />

              {/* LAYER NR. 1 */}
              <div
                className="tp-caption uppercase big_font_size boldest_font_weight dark_font_color sft start"
                data-x="center"
                data-y="140"
                data-speed="300"
                data-start="1000"
                data-easing="easeOutExpo"
              >
                Powerful Theme
              </div>

              {/* LAYER NR. 2 */}
              <div
                className="tp-caption medium_font_size regular_font_weight dark_font_color sfb start"
                data-x="center"
                data-y="182"
                data-speed="300"
                data-start="1300"
                data-easing="easeOutExpo"
              >
                The Best Template to Get You Started
              </div>

              {/* LAYER NR. 3 */}
              <div
                className="tp-caption small_font_size light_font_weight gray_font_color text-center sfb start"
                data-x="center"
                data-y="220"
                data-speed="300"
                data-start="1600"
                data-easing="easeOutExpo"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                <br />
                accusantium doloremque laudantium, totam rem aperiam.
              </div>

              {/* LAYER NR. 4 */}
              <div
                className="tp-caption sfr start"
                data-x="center"
                data-y="292"
                data-hoffset="84"
                data-speed="600"
                data-start="2000"
                data-easing="easeOutExpo"
              ></div>

              {/* LAYER NR. 5 */}
              <div
                className="tp-caption sfl start"
                data-x="center"
                data-y="292"
                data-hoffset="-84"
                data-speed="600"
                data-start="2000"
                data-easing="easeOutExpo"
              >
                <a href="#" className="tp-caption btn-success nb-jkj btn-large border-btn btn-gray">
                  See More Features
                </a>
              </div>

              {/* LAYER NR. 6 */}
              <div
                className="tp-caption customin start"
                data-x="880"
                data-y="30"
                data-speed="1600"
                data-start="2100"
                data-easing="Power1.easeOut"
                data-customin="x:300;y:-40;z:-400;rotationX:0;rotationY:0;rotationZ:-20;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              >
                <img src="images/slide-01-image-02.png" alt="" style={{ width: '193px', height: '231px' }} />
              </div>

              {/* LAYER NR. 7 */}
              <div
                className="tp-caption customin start"
                data-x="100"
                data-y="120"
                data-speed="1400"
                data-start="2600"
                data-easing="Power1.easeOut"
                data-customin="x:-200;y:20;z:-500;rotationX:0;rotationY:0;rotationZ:10;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
              >
                <img src="assets/images/slider/slide-01-image-01.png" alt="" style={{ width: '250px', height: '311px' }} />
              </div>
            </li>
          </ul>
          <div className="tp-bannertimer" style={{ visibility: 'hidden' }}></div>
        </div>
      </div>
    </div>
      {/* Key Features Section */}
      <section className="key-feature-conten row">
        <div className="layy key-feature-1 col-md-3 col-sm-6">
          <div className="layy">
            <i className="fas fa-cogs"></i>
            <br />
            <b>Cutting Edge Technology</b>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled
            </p>
          </div>
        </div>
        <div className="layy key-feature-2 col-md-3 col-sm-6">
          <div className="layy">
            <i className="fas fa-life-ring"></i>
            <br />
            <b>Quality Service</b>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled
            </p>
          </div>
        </div>
        <div className="layy key-feature-3 col-md-3 col-sm-6">
          <div className="layy">
            <i className="fas fa-users"></i>
            <br />
            <b>Expert Team</b>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled
            </p>
          </div>
        </div>
        <div className="layy key-feature-4 col-md-3 col-sm-6">
          <div className="layy">
            <i className="fas fa-headphones"></i>
            <br />
            <b>24 x 7 Support</b>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="wat-we-do row">
        <div className="container">
          <div className="sec-title">
            <h2>Our Services</h2>
            <p>Take a Look at what we are doing ?</p>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-globe"></i>
              <br />
              <b>Webdesign & Development</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-globe"></i>
              <br />
              <b>E-commerce Solutions</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fab fa-android"></i>
              <br />
              <b>Mobile App Development</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-wrench"></i>
              <br />
              <b>SEO & Digital Marketing</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fas fa-cubes"></i>
              <br />
              <b>ERP Solutions</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer
              </p>
            </div>
            <div className="col-md-4 col-sm-6">
              <i className="fab fa-envira"></i>
              <br />
              <b>Opensource Applications</b>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="row home-about">
    <div className="col-sm-6 about-img">
        <img src="assets/images/about_home.jpg" alt="About Home"/>
    </div>
    <div className="col-sm-6 adout-det">
       <div className="row">
           
      
        <div className="layy">
            <b>About Next Technolgies</b>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
            <p>printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with</p>
            <p>it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
            <p> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Many desktop publishing packages </p>
        </div>
         </div>
    </div>
</section>
{/* ************************* Latest Blog Starts Here ************************** */}
<section className="home-blog row">

    <div className="container">
        <div className="sec-title">
            <h2>Latest Blogs</h2>
            <p>Take a Look at some of our latest Blogs</p>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="blog-1 shado-2">
                    <div className="blog-img">
                        <img src="assets/images/blog/blog_1.jpg"/>
                    </div>
                    <div className="nav-det row no-margin">

                        <div className="col-sm-3 col-3 no-padding">
                            <div className="sd-op">
                                <b>2</b><br/>
                                <small>November</small><br/>
                                <small>2016</small>
                            </div>
                        </div>
                        <div className="col-sm-9  col-9 no-padding">
                            <div className="row no-margin">
                                <ul className="cdfik">

                                    <li className="col-sm-6 col-6"> <i className="fa fa-heart"></i> (12) </li>
                                    <li className="col-sm-6 col-6"> <i className="fa fa-comments"></i> (22) </li>
                                </ul>
                            </div>
                            <div className="row no-margin">
                                <ul className="cdfik">
                                    <li className="col-sm-12 col-xs-12"> Posted by : John Mathew</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="pof-det now no-margin">
                        <b>Latest Technology News</b>
                        <p>When you need a solution for a range of business related web services then you will find a busy market of companies claiming to offer you the very best in service and always at a great price.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="blog-1 shado-2">
                    <div className="blog-img">
                        <img src="assets/images/blog/blog_2.jpg"/>
                    </div>
                    <div className="nav-det row no-margin">

                        <div className="col-sm-3 col-3 no-padding">
                            <div className="sd-op">
                                <b>2</b><br/>
                                <small>November</small><br/>
                                <small>2016</small>
                            </div>
                        </div>
                        <div className="col-sm-9 col-9 no-padding">
                            <div className="row no-margin">
                                <ul className="cdfik">

                                    <li className="col-sm-6 col-6"> <i className="fa fa-heart"></i> (12) </li>
                                    <li className="col-sm-6 col-6"> <i className="fa fa-comments"></i> (22) </li>
                                </ul>
                            </div>
                            <div className="row no-margin">
                                <ul className="cdfik">
                                    <li className="col-sm-12 col-xs-12"> Posted by : John Mathew</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="pof-det now no-margin">
                        <b>Latest Technology News</b>
                        <p>When you need a solution for a range of business related web services then you will find a busy market of companies claiming to offer you the very best in service and always at a great price.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="blog-1 shado-2">
                    <div className="blog-img">
                        <img src="assets/images/blog/blog_3.jpg"/>
                    </div>
                    <div className="nav-det row no-margin">

                        <div className="col-sm-3 col-3 no-padding">
                            <div className="sd-op">
                                <b>2</b><br/>
                                <small>November</small><br/>
                                <small>2016</small>
                            </div>
                        </div>
                        <div className="col-sm-9 col-9 no-padding">
                            <div className="row no-margin">
                                <ul className="cdfik">

                                    <li className="col-sm-6 col-6"> <i className="fa fa-heart"></i> (12) </li>
                                    <li className="col-sm-6 col-6"> <i className="fa fa-comments"></i> (22) </li>
                                </ul>
                            </div>
                            <div className="row no-margin">
                                <ul className="cdfik">
                                    <li className="col-sm-12 col-xs-12"> Posted by : John Mathew</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="pof-det now no-margin">
                        <b>Latest Technology News</b>
                        <p>When you need a solution for a range of business related web services then you will find a busy market of companies claiming to offer you the very best in service and always at a great price.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
{/* ************************* Testimonial Starts Here **************************  */}
<section className="testimonial-container row">
    <div className="layy">
        <div className="container">
            <div className="sec-title">
                <h2>Our Testimonial</h2>
                <p>What our clients say about Us</p>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div id="testimonial-slider" className="owl-carousel">
                        <div className="testimonial">
                            <div className="pic">
                                <img src="assets/images/testimonial/img-1.jpg"/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="title">williamson</h3>
                                <span className="post">Web Developer</span>
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                        <div className="testimonial">
                            <div className="pic">
                                <img src="assets/images/testimonial/img-2.jpg"/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="title">Kristina</h3>
                                <span className="post">Web Designer</span>
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                        <div className="testimonial">
                            <div className="pic">
                                <img src="assets/images/testimonial/img-3.jpg"/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="title">Steve Thomas</h3>
                                <span className="post">Web Developer</span>
                            </div>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 {/* ************************* Client List Starts Here ************************** */}
<section className="client-list row">
    <div className="container">
        <div className="sec-title">
            <h2>Client List</h2>
            <p>Some of our valuable clients</p>
        </div>
        <div className="regular row">


            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/9x_jalwa_new_roku.jpg"/>
                <div className="ded">

                </div>

            </div>
            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/9xm_roku.jpg"/>
                <div className="ded">

                </div>

            </div>
            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/food_food_tv_roku.jpg"/>
                <div className="ded">

                </div>

            </div>
            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/zoom-new.jpg"/>
                <div className="ded">

                </div>

            </div>
            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/ndtv_india_roku.jpg"/>
                <div className="ded">

                </div>

            </div>
            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/flowers_roku.jpg"/>
                <div className="ded">

                </div>

            </div>
            <div className="card-1 tv-list">

                <img src="http://nexttelevisions.com/uploads/zoom-new.jpg"/>
                <div className="ded">

                </div>

            </div>
        </div>
    </div>
</section>
 {/* ************************* Footer Starts Here **************************  */}
<footer className="row">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                </p>
            </div>
            <div className="col-md-3 col-sm-6">
                <h2>Latest Blog</h2>
                <div className="row blog-ro">
                    <div className="col-sm-3 col-3 blog-foot-img no-padding">
                        <img src="../../assets/images/blog/blog_1.jpg" />
                    </div>
                    <div className="col-sm-9 col-9 blog-foot-cont">
                        <b>Latest Technology News</b>
                        <p>02-Nov-2018</p>
                    </div>
                </div>
                <div className="row blog-ro">
                    <div className="col-sm-3 col-3 blog-foot-img no-padding">
                        <img src="assets/images/blog/blog_2.jpg" />
                    </div>
                    <div className="col-sm-9 col-9 blog-foot-cont">
                        <b>Latest Technology News</b>
                        <p>02-Feb-2018</p>
                    </div>
                </div>
                <div className="row blog-ro">
                    <div className="col-sm-3 col-3 blog-foot-img no-padding">
                        <img src="assets/images/blog/blog_3.jpg" />
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
        <li><NavLink style={{color:'white'}} to="/">Home</NavLink></li>
        <li><NavLink style={{color:'white'}} to="/about-us">About Us</NavLink></li>
        <li><NavLink style={{color:'white'}} to="/services">Services</NavLink></li>
        <li><NavLink style={{color:'white'}} to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink style={{color:'white'}} to="/contact-us">Contact Us</NavLink></li>
      </ul>
            </div>
            <div className="col-md-3 <col-sm-6></col-sm-6>">
                <h2>Contact Address</h2>
                <address className="md-margin-bottom-40">
                    Nagan Comunications<br/>
                    Phone : +91 9443682111<br/>
                    Email : nagantv111@gmail.com<br/>
                    Web : www.schengensolutions.com<br/>                        
                </address>

               
                
            </div>
        </div>
    </div>

</footer>
{/* <!-- ######## Footer End ####### -->


<!--  ************************* Copyright Starts Here ************************** --> */}
<div className="copy  row">
    <div className="container">
         <p>2015 © All Rights Reserved Designed and developed by 
        <a href="https://www.smarteyeapps.com"> <img src="https://www.smarteyeapps.com/assets/images/ico.png" alt=""/> SmarteyeTechnologies</a></p>
    </div>
</div>
</div>
    
    
  );
}

export default Home;
