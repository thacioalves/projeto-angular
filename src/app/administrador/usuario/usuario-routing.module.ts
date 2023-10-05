import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario-delete/usuario-delete.component';

const routes: Routes = [
  { path: 'create', component: UsuarioCreateComponent },
  { path: 'update', component: UsuarioUpdateComponent },
  { path: 'create', component: UsuarioDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
