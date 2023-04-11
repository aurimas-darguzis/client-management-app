import { Client } from '../modules/internal-clients/models/client.model';

export const mockResponse: { results: Client[] } = {
  results: [
    {
      id: {
        value: '1',
      },
      login: {
        uuid: '11',
      },
      name: {
        title: 'Mr',
        first: 'John',
        last: 'Doe',
      },
    },
    {
      id: {
        value: '2',
      },
      login: {
        uuid: '22',
      },
      name: {
        title: 'Mrs',
        first: 'Jane',
        last: 'Doe',
      },
    },
  ],
};
