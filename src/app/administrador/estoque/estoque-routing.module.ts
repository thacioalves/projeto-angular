import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueListComponent } from './components/estoque-list/estoque-list.component';
import { EstoqueFormComponent } from './components/estoque-form/estoque-form.component';
import { estoqueResolver } from './resolver/estoque-resolver';

const routes: Routes = [
  { path: 'list', component: EstoqueListComponent },
  { path: 'new', component: EstoqueFormComponent },
  {
    path: 'edit/:id',
    component: EstoqueFormComponent,
    resolve: { estoque: estoqueResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstoqueRoutingModule {}
