import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlorCreateComponent } from './components/flor-create/flor-create.component';
import { FlorUpdateComponent } from './components/flor-update/flor-update.component';
import { FlorDeleteComponent } from './components/flor-delete/flor-delete.component';

const routes: Routes = [
  { path: 'create', component: FlorCreateComponent },
  { path: 'update', component: FlorUpdateComponent },
  { path: 'delete', component: FlorDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})


export class FlorRoutingModule { }
