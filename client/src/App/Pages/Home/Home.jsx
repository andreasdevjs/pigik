import React from 'react';

import Header from '../../Components/Header/Header';
import HomeHero from '../../Components/HomeHero/HomeHero';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeHero />
      <HowItWorks />
    </React.Fragment>
  );
}

export default Home;