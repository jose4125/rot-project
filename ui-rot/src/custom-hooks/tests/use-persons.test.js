import { renderHook } from '@testing-library/react-hooks';
import { wait } from '@testing-library/react';
import { usePersons } from '../use-persons';

jest.mock('../use-persons');

const dataUrl = '/data/people.json';

test('should get initial state', () => {
  const initialState = [[], true];
  usePersons.mockReturnValue(initialState);
  const { result } = renderHook(() => usePersons(dataUrl));

  expect(result.current).toStrictEqual(initialState);
});

test('should get the people data', async () => {
  const peopleData = [
    [
      {
        id: 1,
        name: 'Kanye West',
        body_copy:
          'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image: 'https://rot-images.s3-us-west-2.amazonaws.com/kanye%402x.jpg',
        more_info_url: 'https://en.wikipedia.org/wiki/Kanye_West',
        positive_votes: 3,
        negative_votes: 2,
        total_votes: 5,
        category: 'Entertainment',
        closing_date: 1598936400000,
        created_at: 1583038800000,
      },
      {
        id: 2,
        name: 'Cristina Fernández de Kirchner',
        body_copy:
          'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
        image:
          'https://rot-images.s3-us-west-2.amazonaws.com/cristina%402x.jpg',
        more_info_url:
          'https://en.wikipedia.org/wiki/Cristina_Fern%C3%A1ndez_de_Kirchner',
        positive_votes: 3,
        negative_votes: 4,
        total_votes: 7,
        category: 'Politics',
        closing_date: 1598936400000,
        created_at: 1583038800000,
      },
    ],
    false,
  ];

  usePersons.mockReturnValue(peopleData);
  const { result } = renderHook(() => usePersons(dataUrl));

  expect(usePersons).toHaveBeenCalledWith(dataUrl);
  expect(usePersons).toHaveBeenCalledTimes(2);
  await wait(() => expect(result.current).toStrictEqual(peopleData));
});
