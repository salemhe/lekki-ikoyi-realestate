import React from 'react';
import '../styles/App.css'
import Header from '../components/layout/Header';
import HeroSection from '../components/home/HeroSection';
import FeaturedListings from '../components/home/FeaturedListings';
import ExploreCities from '../components/home/ExploreCities';
import GetInquiryForm from '../components/home/GetInquiaryForm'
import NewSelection from '../components/home/NewSelection';
import PopularAreas from '../components/home/PopularAreas';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedListings />
       <ExploreCities />
       <GetInquiryForm />
       <NewSelection />
       <PopularAreas />
    </div>
  );
};

export default Home;
