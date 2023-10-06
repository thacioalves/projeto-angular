import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescontoRoutingModule } from './desconto-routing.module';
import { DescontoCreateComponent } from './components/desconto-create/desconto-create.component';
import { DescontoUpdateComponent } from './components/desconto-update/desconto-update.component';
import { DescontoDeleteComponent } from './components/desconto-delete/desconto-delete.component';


@NgModule({
  declarations: [
    DescontoCreateComponent,
    DescontoUpdateComponent,
    DescontoDeleteComponent
  ],
  imports: [
    CommonModule,
    DescontoRoutingModule
  ]
})
export class DescontoModule { }
