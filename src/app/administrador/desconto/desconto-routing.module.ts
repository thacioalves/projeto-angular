import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescontoListComponent } from './components/desconto-list/desconto-list.component';
import { DescontoFormComponent } from './components/desconto-form/desconto-form.component';


const routes: Routes = [
  { path: 'list', component: DescontoListComponent },
  { path: 'new', component: DescontoFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescontoRoutingModule {}
