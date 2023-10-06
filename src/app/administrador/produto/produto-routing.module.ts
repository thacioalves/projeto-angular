import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto-update/produto-update.component';
import { ProdutoDeleteComponent } from './components/produto-delete/produto-delete.component';

const routes: Routes = [
  { path: 'create', component: ProdutoCreateComponent },
  { path: 'update', component: ProdutoUpdateComponent },
  { path: 'delete', component: ProdutoDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
