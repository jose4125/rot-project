import React from 'react';
import { useMainCard } from '../../custom-hooks/use-main-card';

import MainCard from '../Main-card/Main-card';
import CountDown from '../Count-down/Count-down';
import './Hero.scss';

function Hero() {
  const [data, isLoading] = useMainCard('/data/main-person.json');
  let stylesAttr = {
    backgroundImage: `url('${isLoading ? '' : data[0].image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="hero" style={stylesAttr}>
      <div className="hero__container">
        {isLoading ? 'loading...' : <MainCard info={data[0]} />}
      </div>
      <CountDown closingDate={isLoading ? 0 : data[0].closing_date} />
    </section>
  );
}

export default Hero;
