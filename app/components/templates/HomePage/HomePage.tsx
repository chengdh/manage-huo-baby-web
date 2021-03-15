import React from 'react';
import Banner from '../../modules/Banner/Banner';
import FeatureSection from '../../modules/FeatureSection/FeatureSection';
import PriceSection from '../../modules/Pricing/PriceSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <FeatureSection />
      <PriceSection />
    </>
  );
};

export default HomePage;