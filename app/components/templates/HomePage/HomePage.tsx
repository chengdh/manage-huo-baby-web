import React from 'react';
import { useAuth } from 'react-use-auth';
import Banner from '../../modules/Banner/Banner';
import FeatureSection from '../../modules/FeatureSection/FeatureSection';

const HomePage: React.FC = () => {

  const { isAuthenticated, login, logout, user } = useAuth();
  return (
    <>
      <Banner />
      <FeatureSection />
    </>
  );
};

export default HomePage;