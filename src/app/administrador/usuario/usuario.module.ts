import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario-update/usuario-update.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    UsuarioCreateComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
