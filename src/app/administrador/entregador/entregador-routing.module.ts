import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregadorCreateComponent } from './components/entregador-create/entregador-create.component';
import { EntregadorUpdateComponent } from './components/entregador-update/entregador-update.component';
import { EntregadorDeleteComponent } from './components/entregador-delete/entregador-delete.component';

const routes: Routes = [
  {path: 'create', component: EntregadorCreateComponent},
  {path: 'update', component: EntregadorUpdateComponent},
  {path: 'delete', component: EntregadorDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregadorRoutingModule { }
