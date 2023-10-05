import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FornecedorCreateComponent } from './components/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './components/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/fornecedor-delete/fornecedor-delete.component';

const routes: Routes = [
  { path: 'create', component: FornecedorCreateComponent },
  { path: 'update', component: FornecedorUpdateComponent },
  { path: 'delete', component: FornecedorDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FornecedorRoutingModule {}
