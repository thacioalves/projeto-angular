import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './components/estoque/estoque.component';


@NgModule({
  declarations: [
    EstoqueComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
