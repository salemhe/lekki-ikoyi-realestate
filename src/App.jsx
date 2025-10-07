import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import Listings from './pages/Listings';
import SingleProperty from './pages/SingleProperty';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import InquiryForm from './pages/InquiryForm';

import './styles/index.css';

function App() {
  return (
    <>
      <ScrollToTop />

      {/* Global toast notifications */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            fontSize: '14px',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/faq" element={<FAQ />} />
        <Route path="/inquiry" element={<InquiryForm />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property/:id" element={<SingleProperty />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
