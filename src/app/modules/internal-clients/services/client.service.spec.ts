import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Client } from '../models/client.model';
import { ClientService } from './client.service';
import { TestBed } from '@angular/core/testing';
import { mockResponse } from 'src/app/mocks/mock-responses';
import { take } from 'rxjs';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;

  function handleInitialRequest() {
    const req = httpMock.expectOne(service['apiUrl']);
    req.flush(mockResponse);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService],
    });

    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);

    handleInitialRequest();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve clients from API and update clients$ BehaviorSubject', () => {
    service.clients$.pipe(take(1)).subscribe((clients) => {
      expect(clients.length).toBe(2);
      expect(clients).toEqual(mockResponse.results);
    });
  });
});
