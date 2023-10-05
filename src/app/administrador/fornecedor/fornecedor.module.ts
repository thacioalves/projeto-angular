import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorCreateComponent } from './components/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './components/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/fornecedor-delete/fornecedor-delete.component';


@NgModule({
  declarations: [
    FornecedorCreateComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule
  ]
})
export class FornecedorModule { }
