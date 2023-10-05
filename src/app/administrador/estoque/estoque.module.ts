import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueRoutingModule } from './estoque-routing.module';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { EstoqueUpdateComponent } from './components/estoque-update/estoque-update.component';
import { EstoqueCreateComponent } from './components/estoque-create/estoque-create.component';
import { EstoqueDeleteComponent } from './components/estoque-delete/estoque-delete.component';


@NgModule({
  declarations: [
    EstoqueComponent,
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
