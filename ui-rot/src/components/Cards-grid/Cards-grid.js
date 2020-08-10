import React from 'react';
import Card from '../Card/Card';

import './Cards-grid.scss';

function CardsGrid() {
  return (
    <section className="cards-grid">
      <div className="cards-grid__container">
        <ul class="cards-container">
          <Card />
          <Card />
        </ul>
      </div>
    </section>
  );
}

export default CardsGrid;
