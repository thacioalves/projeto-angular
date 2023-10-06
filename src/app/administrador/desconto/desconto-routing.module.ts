import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescontoCreateComponent } from './components/desconto-create/desconto-create.component';
import { DescontoUpdateComponent } from './components/desconto-update/desconto-update.component';
import { DescontoDeleteComponent } from './components/desconto-delete/desconto-delete.component';

const routes: Routes = [
  { path: 'create', component: DescontoCreateComponent },
  { path: 'update', component: DescontoUpdateComponent },
  { path: 'delete', component: DescontoDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescontoRoutingModule {}
