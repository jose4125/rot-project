import React, { useEffect, useState } from 'react';
import { usePersons } from '../../custom-hooks/use-persons';
import Card from '../Card/Card';

import './Cards-grid.scss';

function renderCards(persons) {
  return <Card key={persons.id} info={persons} />;
}

function CardsGrid() {
  const [data, isLoading] = usePersons('/data/people.json');

  return (
    <>
      {isLoading ? (
        'is loading data'
      ) : (
        <section className="cards-grid">
          <div className="cards-grid__container">
            <ul className="cards-container">{data.map(renderCards)}</ul>
          </div>
        </section>
      )}
    </>
  );
}

export default CardsGrid;
