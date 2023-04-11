import { ActivatedRoute } from '@angular/router';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent {
  client: Client | null = null;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location
  ) {
    const clientId = this.route.snapshot.paramMap.get('clientId');
    if (clientId) {
      const client = this.clientService.clients.find(
        (c) => c.id.value === clientId
      );
      if (client) {
        this.client = client;
        this.clientService.selectedClient = client;
      }
    } else {
      this.client = this.clientService.selectedClient;
    }
  }

  goBack() {
    this.location.back();
  }
}
