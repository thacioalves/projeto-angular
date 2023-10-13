import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FidelidadeCreateComponent } from './components/fidelidade-create/fidelidade-create.component';
import { FidelidadeUpdateComponent } from './components/fidelidade-update/fidelidade-update.component';
import { FidelidadeDeleteComponent } from './components/fidelidade-delete/fidelidade-delete.component';

const routes: Routes = [
  {path: 'create', component: FidelidadeCreateComponent},
  {path: 'update', component: FidelidadeUpdateComponent},
  {path: 'delete', component: FidelidadeDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FidelidadeRoutingModule { }
