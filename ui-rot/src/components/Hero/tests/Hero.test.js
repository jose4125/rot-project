import React from 'react';
import { render, wait } from '@testing-library/react';

import Hero from '../Hero';
import { useMainCard } from '../../../custom-hooks/use-main-card';

jest.mock('../../../custom-hooks/use-main-card');

test('should render loading state', () => {
  useMainCard.mockReturnValue([[], true]);

  const { queryByTestId, container } = render(<Hero />);
  const MainCard = queryByTestId('maincard');

  expect(useMainCard).toHaveBeenCalledTimes(1);
  expect(useMainCard).toBeCalledWith('/data/main-person.json');
  expect(container).toHaveTextContent('loading..');
  expect(MainCard).not.toBeInTheDocument();
});

test('should render main card', async () => {
  const mainCardData = [
    [
      {
        id: 1,
        name: 'Pope Francis',
        body_copy:
          'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) ',
        image: 'https://rot-images.s3-us-west-2.amazonaws.com/Pope@2x.jpg',
        more_info_url: 'https://en.wikipedia.org/wiki/Pope_Francis',
        positive_votes: 3,
        negative_votes: 2,
        total_votes: 5,
        category: 'Religion',
        closing_date: 1599282000000,
        created_at: 1585717200000,
      },
    ],
    false,
  ];

  useMainCard.mockReturnValue(mainCardData);

  const { getByTestId } = render(<Hero />);
  const HeroComp = getByTestId('hero');
  const CountDown = getByTestId('countdown');

  expect(useMainCard).toBeCalledWith('/data/main-person.json');
  expect(useMainCard).toHaveBeenCalledTimes(2);
  expect(CountDown).toBeInTheDocument();
  expect(HeroComp).toHaveClass('hero');
  expect(HeroComp).toHaveStyle(`
    background-image: url(https://rot-images.s3-us-west-2.amazonaws.com/Pope@2x.jpg);
    background-position: center;
    background-size: cover;
  `);

  await wait(() => {
    const MainCard = getByTestId('maincard');
    expect(MainCard).toBeInTheDocument();
  });
});
