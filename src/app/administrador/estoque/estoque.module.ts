import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EstoqueCreateComponent } from './components/estoque-create/estoque-create.component';
import { EstoqueDeleteComponent } from './components/estoque-delete/estoque-delete.component';
import { EstoqueUpdateComponent } from './components/estoque-update/estoque-update.component';
import { EstoqueRoutingModule } from './estoque-routing.module';


@NgModule({
  declarations: [
    EstoqueUpdateComponent,
    EstoqueCreateComponent,
    EstoqueDeleteComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ]
})
export class EstoqueModule { }
