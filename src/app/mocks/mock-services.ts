import { BehaviorSubject } from 'rxjs';
import { Client } from '../modules/internal-clients/models/client.model';
import { clientsMock } from './mock-data';

export const clientServiceMock = {
  clients$: new BehaviorSubject<Client[]>(clientsMock),
  clients: clientsMock,
  selectedClient: null,
};
