import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioUpdateComponent } from './components/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario-delete/usuario-delete.component';
import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';


@NgModule({
  declarations: [
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    UsuarioCreateComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
