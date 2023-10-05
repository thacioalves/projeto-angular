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
    path: 'administrador/fornecedor',
    loadChildren: () =>
      import('./administrador/fornecedor/fornecedor.module').then(
        (m) => m.FornecedorModule
      ),
  },
  {
    path: 'administrador/usuario',
    loadChildren: () =>
      import('./administrador/usuario/usuario.module').then(
        (m) => m.UsuarioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
