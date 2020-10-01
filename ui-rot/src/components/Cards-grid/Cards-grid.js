import React from 'react';
import { usePersons } from '../../custom-hooks/use-persons';
import Card from '../Card/Card';

import './Cards-grid.scss';

function renderCards(persons) {
  return <Card key={persons.id} info={persons} />;
}

function CardsGrid() {
  const [data, isLoading] = usePersons('/data/people.json');

  return (
    <section data-testid="cardsgrid">
      {isLoading ? (
        'is loading data'
      ) : (
        <div className="cards-grid">
          <div className="cards-grid__container">
            <ul className="cards-container">{data.map(renderCards)}</ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default CardsGrid;
