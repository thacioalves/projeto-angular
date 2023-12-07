import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estoque } from 'src/app/models/estoque';
import { Produto } from 'src/app/models/produto';
import { EstoqueService } from 'src/app/services/estoque.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-estoque-form',
  templateUrl: './estoque-form.component.html',
  styleUrls: ['./estoque-form.component.css'],
})
export class EstoqueFormComponent implements OnInit {
  formGroup: FormGroup;
  produtos: Produto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private estoqueService: EstoqueService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      quantidadeProduto: ['', Validators.required],
      produto: [null],
    });
  }

  ngOnInit(): void {
    // buscando todos os produtos para o select
    this.produtoService.findAll(0, 27).subscribe((data) => {
      this.produtos = data;
      this.initializeForm();
    });
  }
  initializeForm() {
    const estoque: Estoque = this.activatedRoute.snapshot.data['estoque'];

    // selectionando o produto
    const produto = this.produtos.find(
      (produto) => produto.id === (estoque?.produto?.id || null)
    );

    this.formGroup = this.formBuilder.group({
      id: [estoque && estoque.id ? estoque.id : null],
      quantidadeProduto: [
        estoque && estoque.quantidadeProduto ? estoque.quantidadeProduto : '',
        Validators.required,
      ],
      produto: [produto],
    });
    console.log(this.formGroup.value);
  }

  salvar() {
    if (this.formGroup.valid) {
      const estoque = this.formGroup.value;
      if (estoque.id == null) {
        this.estoqueService.save(estoque).subscribe({
          next: (estoqueCadastrado) => {
            this.router.navigateByUrl('/estoque/list');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          },
        });
      } else {
        this.estoqueService.update(estoque).subscribe({
          next: (estoqueCadastrado) => {
            this.router.navigateByUrl('/estoque/list');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          },
        });
      }
    }
  }

  excluir() {
    const estoque = this.formGroup.value;
    if (estoque.id != null) {
      this.estoqueService.delete(estoque).subscribe({
        next: (e) => {
          this.router.navigateByUrl('/estoque/list');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        },
      });
    }
  }
}
