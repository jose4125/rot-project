import { renderHook, act } from '@testing-library/react-hooks';
import { wait } from '@testing-library/react';
import { useMainCard } from '../use-main-card';

jest.mock('../use-main-card');

const dataUrl = '/data/main-person.json';

test('should get initial state', () => {
  const initialState = [[], true];
  useMainCard.mockReturnValue(initialState);
  const { result } = renderHook(() => useMainCard(dataUrl));

  expect(result.current).toStrictEqual(initialState);
});

test('should get the main card data', async () => {
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
  const { result } = renderHook(() => useMainCard(dataUrl));

  expect(useMainCard).toBeCalledWith(dataUrl);
  await wait(() => expect(result.current).toStrictEqual(mainCardData));
});
