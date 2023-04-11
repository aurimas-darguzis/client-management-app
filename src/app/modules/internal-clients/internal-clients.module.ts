import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { CommonModule } from '@angular/common';
import { InternalClientsRoutingModule } from './internal-clients-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientsListComponent, ClientDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    InternalClientsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class InternalClientsModule {}
