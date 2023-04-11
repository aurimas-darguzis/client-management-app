import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'internal-clients',
    pathMatch: 'full',
  },
  {
    path: 'internal-clients',
    loadChildren: () =>
      import('./modules/internal-clients/internal-clients.module').then(
        (m) => m.InternalClientsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
