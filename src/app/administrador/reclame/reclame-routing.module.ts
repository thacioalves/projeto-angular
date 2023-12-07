import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclameListComponent } from './components/reclame-list/reclame-list.component';
import { ReclameFormComponent } from './components/reclame-form/reclame-form.component';

const routes: Routes = [
  { path: 'list', component: ReclameListComponent },
  { path: 'new', component: ReclameFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclameRoutingModule { }
