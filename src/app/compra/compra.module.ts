import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ProdutoCardListComponent } from './components/produto-card-list/produto-card-list.component';
import { CompraRoutingModule } from './compra-routing.module';

@NgModule({
  declarations: [CarrinhoComponent, ProdutoCardListComponent],
  imports: [
    CommonModule,
    CompraRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class CompraModule {}
