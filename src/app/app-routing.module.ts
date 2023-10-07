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
    path: 'administrador/entregador',
    loadChildren: () =>
      import('./administrador/entregador/entregador.module').then(
        (m) => m.EntregadorModule
      ),
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
  {
    path: 'administrador/estoque',
    loadChildren: () =>
      import('./administrador/estoque/estoque.module').then(
        (m) => m.EstoqueModule
      ),
  },
  {
    path: 'administrador/produto',
    loadChildren: () =>
      import('./administrador/produto/produto.module').then(
        (m) => m.ProdutoModule
      ),
  },
  {
    path: 'administrador/desconto',
    loadChildren: () =>
      import('./administrador/desconto/desconto.module').then(
        (m) => m.DescontoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
