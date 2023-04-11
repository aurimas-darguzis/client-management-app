import { Component, ViewChild } from '@angular/core';

import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent {
  displayedColumns: string[] = [
    'client',
    'name',
    'email',
    'phone',
    'registered',
  ];
  dataSource: MatTableDataSource<Client>;
  clients: Client[] = [];
  pageSizeOptions = [5, 10, 20];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private clientService: ClientService, private router: Router) {
    this.dataSource = new MatTableDataSource<Client>([]);
  }

  ngOnInit(): void {
    this.clientService.clients$.subscribe((clients) => {
      this.clients = clients;
      this.dataSource.data = clients;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSelectClient(clientId: string) {
    const client = this.clients.find((c) => c.login.uuid === clientId);
    if (client) {
      this.clientService.selectedClient = client;
      this.router.navigate(['/internal-clients', clientId]);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClientRowClick(client: Client) {
    const clientId = client.login.uuid;
    this.onSelectClient(clientId);
  }
}
