import { RouterModule, Routes } from '@angular/router';

import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ClientsListComponent,
  },
  {
    path: ':clientId',
    component: ClientDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalClientsRoutingModule {}
