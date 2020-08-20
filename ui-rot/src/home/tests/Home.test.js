import React from 'react';
import { render, cleanup, getByTestId, within } from '@testing-library/react';

import Home from '../Home';

afterEach(cleanup);

test('Should render Home properly', () => {
  const { getByTestId } = render(<Home />);

  const Hero = getByTestId('hero');
  const Info = getByTestId('info');
  const Headline = getByTestId('headline');
  const CardsGrid = getByTestId('cardsgrid');
  const Footer = getByTestId('footer');

  expect(Hero).toBeInTheDocument();
  expect(Info).toBeInTheDocument();
  expect(Headline).toBeInTheDocument();
  expect(CardsGrid).toBeInTheDocument();
  expect(Footer).toBeInTheDocument();
});
