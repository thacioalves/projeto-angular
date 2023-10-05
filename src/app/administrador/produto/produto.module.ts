import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutoDeleteComponent } from './components/produto-delete/produto-delete.component';
import { ProdutoCreateComponent } from './components/produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './components/produto-update/produto-update.component';


@NgModule({
  declarations: [
    ProdutoComponent,
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
