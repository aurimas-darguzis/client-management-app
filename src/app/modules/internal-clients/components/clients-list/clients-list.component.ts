import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent {
  clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) {
    this.clients = this.clientService.clients;
  }

  ngOnInit(): void {
    this.clientService.clients$.subscribe((clients) => {
      this.clients = clients;
    });
  }

  onSelectClient(clientId: string) {
    const client = this.clients.find((c) => c.id.value === clientId);
    if (client) {
      this.clientService.selectedClient = client;
      this.router.navigate(['/client', clientId]);
    }
  }
}
