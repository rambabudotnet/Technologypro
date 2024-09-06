import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/pages/Home';
import AboutUs from './Component/pages/AboutUs';
import Services from './Component/pages/Services';
import Portfolio from './Component/pages/Portfolio';
import ContactUs from './Component/pages/ContactUs'; // Corrected this line
import Header from './Component/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
