import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { ClientDetailsComponent } from './client-details.component';
import { ClientService } from '../../services/client.service';
import { Location } from '@angular/common';
import { clientServiceMock } from 'src/app/mocks/mock-services';

describe('ClientDetailsComponent', () => {
  let component: ClientDetailsComponent;
  let fixture: ComponentFixture<ClientDetailsComponent>;
  let clientService: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientDetailsComponent],
      providers: [
        { provide: ClientService, useValue: clientServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '11',
              },
            },
          },
        },
        Location,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDetailsComponent);
    component = fixture.componentInstance;
    clientService = TestBed.inject(ClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display client details', () => {
    expect(component.client).toEqual(clientServiceMock.clients[0]);
  });

  it('should navigate back on goBack() call', () => {
    const location = TestBed.inject(Location);
    const backSpy = spyOn(location, 'back');
    component.goBack();
    expect(backSpy).toHaveBeenCalled();
  });
});
