import React from 'react';
import ChokeFullSection from '../ChokeFullSection/ChokeFullSection';
import FeaturedProductsSection from '../FeaturedProductsSection/FeaturedProductsSection';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
  return (
    <div>

      <HeroSection/>
      <ChokeFullSection/>
      <FeaturedProductsSection/>

    </div>
  );
};

export default Home;