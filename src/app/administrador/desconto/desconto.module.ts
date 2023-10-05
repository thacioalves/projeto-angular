import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescontoRoutingModule } from './desconto-routing.module';
import { DescontoComponent } from './components/desconto/desconto.component';


@NgModule({
  declarations: [
    DescontoComponent
  ],
  imports: [
    CommonModule,
    DescontoRoutingModule
  ]
})
export class DescontoModule { }
