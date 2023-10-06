import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueCreateComponent } from './components/estoque-create/estoque-create.component';
import { EstoqueUpdateComponent } from './components/estoque-update/estoque-update.component';
import { EstoqueDeleteComponent } from './components/estoque-delete/estoque-delete.component';

const routes: Routes = [
  { path: 'create', component: EstoqueCreateComponent },
  { path: 'update', component: EstoqueUpdateComponent },
  { path: 'delete', component: EstoqueDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoqueRoutingModule {}
