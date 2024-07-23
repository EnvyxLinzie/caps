import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import Workflow from './Workflow';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
