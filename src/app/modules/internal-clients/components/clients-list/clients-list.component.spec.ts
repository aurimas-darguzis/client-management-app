import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientService } from '../../services/client.service';
import { ClientsListComponent } from './clients-list.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { clientServiceMock } from 'src/app/mocks/mock-services';
import { clientsMock } from 'src/app/mocks/mock-data';

describe('ClientsListComponent', () => {
  let component: ClientsListComponent;
  let fixture: ComponentFixture<ClientsListComponent>;
  let clientService: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [ClientsListComponent],
      providers: [
        { provide: ClientService, useValue: clientServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'mockId',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsListComponent);
    component = fixture.componentInstance;
    clientService = TestBed.inject(ClientService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display clients', () => {
    expect(component.dataSource.data.length).toBe(clientsMock.length);
  });

  it('should filter clients', () => {
    component.applyFilter({ target: { value: 'John' } } as unknown as Event);

    expect(component.dataSource.filteredData.length).toBe(1);
  });

  it('should select a client and navigate to the client details page', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.onSelectClient('11');
    expect(clientService.selectedClient).toEqual(clientsMock[0]);
    expect(navigateSpy).toHaveBeenCalledWith(['/internal-clients', '11']);
  });
});
