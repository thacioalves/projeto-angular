import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FornecedorCreateComponent } from './components/fornecedor-create/fornecedor-create.component';
import { FornecedorDeleteComponent } from './components/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './components/fornecedor-update/fornecedor-update.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';


@NgModule({
  declarations: [
    FornecedorCreateComponent,
    FornecedorUpdateComponent,
    FornecedorDeleteComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    SharedModule
  ]
})
export class FornecedorModule { }
