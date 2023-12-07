import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent implements OnInit {
  tableColumns: string[] = [
    'id-column',
    'nome-column',
    'valorUnidade-column',
    'descricao-column',
  ];
  produtos: Produto[] = [];
  totalRegistros = 0;
  pageSize = 2;
  pagina = 0;
  filtro: string = '';

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
    this.carregarTotalRegistros();
  }

  carregarProdutos() {
    // se existe dados no filtro
    if (this.filtro) {
      this.produtoService
        .findByNome(this.filtro, this.pagina, this.pageSize)
        .subscribe((data) => {
          this.produtos = data;
        });
    } else {
      // buscando todos os produtos
      this.produtoService
        .findAll(this.pagina, this.pageSize)
        .subscribe((data) => {
          this.produtos = data;
        });
    }
  }

  carregarTotalRegistros() {
    // se existe dados no filtro
    if (this.filtro) {
      this.produtoService.countByNome(this.filtro).subscribe((data) => {
        this.totalRegistros = data;
      });
    } else {
      this.produtoService.count().subscribe((data) => {
        this.totalRegistros = data;
      });
    }
  }

  // Método para paginar os resultados
  paginar(event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarProdutos();
  }

  aplicarFiltro() {
    this.carregarProdutos();
    this.carregarTotalRegistros();
  }
}
