import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclameCreateComponent } from './components/reclame-create/reclame-create.component';
import { ReclameUpdateComponent } from './components/reclame-update/reclame-update.component';
import { ReclameDeleteComponent } from './components/reclame-delete/reclame-delete.component';

const routes: Routes = [
  { path: 'create', component: ReclameCreateComponent },
  { path: 'update', component: ReclameUpdateComponent },
  { path: 'delete', component: ReclameDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclameRoutingModule { }
