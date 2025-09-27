import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
// // import FAQ from './pages/FAQ';
import Listings from './pages/Listings';
import SingleProperty from './pages/SingleProperty';

// import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import './styles/index.css';

function App() {
  return (
    <>
      {/* <Header /> */}

      {/* ✅ Move ScrollToTop outside Routes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<SingleProperty />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
