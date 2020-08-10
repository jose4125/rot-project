import React from 'react';

import MainCard from '../Main-card/Main-card';
import CountDown from '../Count-down/Count-down';
import './Hero.scss';

function Hero() {
  let stylesAttr = {
    background: "url('/images/pope@2x.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="hero" style={stylesAttr}>
      <div className="hero__container">
        <MainCard />
      </div>
      <CountDown />
    </section>
  );
}

export default Hero;
