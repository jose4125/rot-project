import React from 'react';

import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Headline from '../components/Headline/Headline';
import CardsGrid from '../components/Cards-grid/Cards-grid';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div data-testid="homepage">
      <Hero />
      <Info />
      <Headline />
      <CardsGrid />
      <Footer />
    </div>
  );
}

export default Home;
