import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'administrador',
    loadChildren: () =>
      import('./administrador/administrador.module').then(
        (m) => m.AdministradorModule
      ),
  },
  {
    path: 'administrador/flor',
    loadChildren: () =>
      import('./administrador/flor/flor.module').then((m) => m.FlorModule),
  },
  {
    path: 'administrador/flor',
    loadChildren: () =>
      import('./administrador/flor/flor.module').then((m) => m.FlorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
