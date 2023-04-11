import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { CommonModule } from '@angular/common';
import { InternalClientsRoutingModule } from './internal-clients-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientsListComponent, ClientDetailsComponent],
  imports: [CommonModule, RouterModule, InternalClientsRoutingModule],
})
export class InternalClientsModule {}
