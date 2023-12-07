import { Component, OnInit, Signal, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from 'src/app/models/produto';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';

type Card = {
  idProduto: number;
  nome: string;
  valorUnidade: number;
  descricao: string;
  urlImagem: string;
};

@Component({
  selector: 'app-produto-card-list',
  templateUrl: './produto-card-list.component.html',
  styleUrls: ['./produto-card-list.component.css'],
})
export class ProdutoCardListComponent implements OnInit {
  cards = signal<Card[]>([]);
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    // buscando todos as produtos
    this.produtoService.findAll(0, 10).subscribe((data) => {
      this.produtos = data;
      this.carregarCards();
    });
  }

  carregarCards() {
    const cards: Card[] = [];
    this.produtos.forEach((produto) => {
      cards.push({
        idProduto: produto.id,
        nome: produto.nome,
        valorUnidade: produto.valorUnidade,
        descricao: produto.descricao,
        urlImagem: this.produtoService.getUrlImagem(produto.nomeImagem),
      });
    });
    this.cards.set(cards);
  }

  adicionarAoCarrinho(card: Card) {
    this.showSnackbarTopPosition('Produto adicionado ao carrinho!', 'Fechar');
    this.carrinhoService.adicionar({
      id: card.idProduto,
      nome: card.nome,
      valorUnidade: card.valorUnidade,
      descricao: card.descricao,
      quantidade: 1,
    });
  }

  showSnackbarTopPosition(content: any, action: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}
