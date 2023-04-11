import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Client } from '../models/client.model';
import { ClientService } from './client.service';
import { TestBed } from '@angular/core/testing';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService],
    });

    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve clients from API', () => {
    const mockResponse: { results: Client[] } = {
      results: [
        {
          id: {
            value: '1',
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
          name: {
            title: 'Mrs',
            first: 'Jane',
            last: 'Doe',
          },
        },
      ],
    };

    service.getClients().subscribe((clients) => {
      expect(clients.results.length).toBe(2);
      expect(clients).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
