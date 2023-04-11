import { Client } from '../modules/internal-clients/models/client.model';

export const clientsMock: Client[] = [
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
    email: 'john@doe.mr',
    phone: '111-22-333',
    registered: { date: '2003-10-01T05:56:08.078Z' },
    picture: {
      thumbnail: '',
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
    email: 'jane@doe.mrs',
    phone: '222-33-444',
    registered: { date: '2003-10-01T05:56:08.078Z' },
    picture: {
      thumbnail: '',
    },
  },
];
