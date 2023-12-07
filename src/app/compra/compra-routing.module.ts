import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoCardListComponent } from './components/produto-card-list/produto-card-list.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutoCardListComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraRoutingModule {}
