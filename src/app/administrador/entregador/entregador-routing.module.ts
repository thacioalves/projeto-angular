import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregadorListComponent } from './components/entregador-list/entregador-list.component';
import { EntregadorFormComponent } from './components/entregador-form/entregador-form.component';

const routes: Routes = [
  {path: 'list', component: EntregadorListComponent},
  {path: 'new', component: EntregadorFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregadorRoutingModule { }
