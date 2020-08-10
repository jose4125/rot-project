import React from 'react';

import Hero from '../components/Hero/Hero';
import Info from '../components/Info/Info';
import Headline from '../components/Headline/Headline';
import CardsGrid from '../components/Cards-grid/Cards-grid';

function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Headline />
      <CardsGrid />
    </div>
  );
}

export default Home;
