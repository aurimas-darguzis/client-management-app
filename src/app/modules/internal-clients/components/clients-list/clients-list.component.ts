import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      console.log({ clients });
      this.clients = clients.results;
    });
  }
}
