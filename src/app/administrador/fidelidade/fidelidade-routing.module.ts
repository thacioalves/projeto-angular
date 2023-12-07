import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FidelidadeListComponent } from './components/fidelidade-list/fidelidade-list.component';
import { FidelidadeFormComponent } from './components/fidelidade-form/fidelidade-form.component';

const routes: Routes = [
  {path: 'list', component: FidelidadeListComponent},
  {path: 'new', component: FidelidadeFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FidelidadeRoutingModule { }
