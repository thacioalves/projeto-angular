import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CompraRoutingModule } from './compra-routing.module';

@NgModule({
  declarations: [CarrinhoComponent],
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
