import React from 'react';
import Categories from '../../Components/Categories/Categories';
import Header from '../../Components/Header/Header';
import HomeHero from '../../Components/HomeHero/HomeHero';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeHero />
      <Categories />
      <HowItWorks />
    </React.Fragment>
  );
}

export default Home;