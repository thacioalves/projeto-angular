import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminTemplateComponent } from './shared/components/admin-template/admin-template.component';
import { UserTemplateComponent } from './shared/components/user-template/user-template.component';
import { CarrinhoComponent } from './compra/components/carrinho/carrinho.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdminTemplateComponent,
    children: [
      {
        path: 'estoque',
        loadChildren: () =>
          import('./administrador/estoque/estoque.module').then(
            (m) => m.EstoqueModule
          ),
      },
      {
        path: 'flor',
        loadChildren: () =>
          import('./administrador/flor/flor.module').then((m) => m.FlorModule),
      },
      {
        path: 'fornecedor',
        loadChildren: () =>
          import('./administrador/fornecedor/fornecedor.module').then(
            (m) => m.FornecedorModule
          ),
      },
      {
        path: 'produto',
        loadChildren: () =>
          import('./administrador/produto/produto.module').then(
            (m) => m.ProdutoModule
          ),
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('./administrador/usuario/usuario.module').then(
            (m) => m.UsuarioModule
          ),
      },
    ],
  },

  {
    path: 'user',
    component: UserTemplateComponent,
    children: [
      // { path: 'login', component: LoginComponent },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'compras',
        loadChildren: () =>
          import('./compra/compra.module').then((m) => m.CompraModule),
      },
      // { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '', redirectTo: '/user', pathMatch: 'full' }, // Rota padrão
  { path: '**', redirectTo: '/user' }, // Rota para tratamento de erro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
