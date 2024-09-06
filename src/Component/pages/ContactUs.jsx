import React, { useState } from 'react';

function ContactUs() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: 'Enquiry',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
      {/* Navigation */}
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

      {/* Contact Us Form */}
      <div style={{ paddingTop: '110px', backgroundColor: '#FFF', padding: '30px' }} className="about-cc row">
        <div className="container">
          <div className="row bfvf abou">
            <h4>Contact Us</h4>
          </div>
          <div className="row">
            <div style={{ marginTop: '20px' }} className="col-sm-7 for-cnt">
              <form onSubmit={handleSubmit} action="http://hbntv.in/home/addContact" method="post">
                <div className="row">
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label htmlFor="name">Enter Name</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <input
                      id="name"
                      required
                      name="name"
                      className="form-control input-sm"
                      placeholder="Enter Name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label htmlFor="mobile">Mobile Number</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <input
                      id="mobile"
                      required
                      name="mobile"
                      className="form-control input-sm"
                      placeholder="Enter Mobile Number"
                      type="text"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '10px' }}>
                    <label htmlFor="email">Email Address</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <input
                      id="email"
                      name="email"
                      className="form-control input-sm"
                      placeholder="Enter Email Address"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label htmlFor="subject">Subject</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <select
                      id="subject"
                      name="subject"
                      className="form-control input-sm"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option>Enquiry</option>
                      <option>Need Support</option>
                      <option>Sales Enquiry</option>
                    </select>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                    <label htmlFor="message">Message</label>
                    <span style={{ float: 'right' }}><b>:</b></span>
                  </div>
                  <div className="col-sm-9">
                    <textarea
                      id="message"
                      required
                      name="message"
                      className="form-control input-sm"
                      style={{ resize: 'none' }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '15px' }}>
                  <div className="col-sm-3" style={{ paddingTop: '3px' }}>
                  </div>
                  <div className="col-sm-9">
                    <button type="submit" style={{ fontSize: '13px' }} className="btn card btn-sm btn-default"><b>Submit</b></button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-5 about-tt">
              <b>Address</b>
              <address className="md-margin-bottom-40">
                Roos Street, Randy Colany<br />
                Newberg, Italy <br />
                Phone : +31 8987657665456<br />
                Email : info@nexttechnologies.com<br />
                Web : www.nexttechnologies.com<br />
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
