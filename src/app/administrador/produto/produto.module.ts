import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './components/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './components/produto-update/produto-update.component';
import { ProdutoRoutingModule } from './produto-routing.module';


@NgModule({
  declarations: [
    ProdutoDeleteComponent,
    ProdutoCreateComponent,
    ProdutoUpdateComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
