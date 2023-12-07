import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent {
  formGroup: FormGroup;
  apiResponse: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const produto: Produto = this.activatedRoute.snapshot.data['produto'];

    this.formGroup = formBuilder.group({
      id: [produto && produto.id ? produto.id : null],
      nome: [produto && produto.nome ? produto.nome : '', Validators.required],
      valorUnidade: [
        produto && produto.valorUnidade ? produto.valorUnidade : '',
        Validators.required,
      ],
      descricao: [
        produto && produto.descricao ? produto.descricao : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const produto = this.formGroup.value;
      if (produto.id == null) {
        this.produtoService.save(produto).subscribe({
          next: (produtoCadastrado) => {
            this.router.navigateByUrl('administrador/produto/list');
          },
          error: (errorResponse) => {
            // Processar erros da API
            this.apiResponse = errorResponse.error;

            // Associar erros aos campos do formulário
            this.formGroup
              .get('nome')
              ?.setErrors({ apiError: this.getErrorMessage('nome') });
            this.formGroup
              .get('valorUnidade')
              ?.setErrors({ apiError: this.getErrorMessage('valorUnidade') });
            this.formGroup
              .get('descricao')
              ?.setErrors({ apiError: this.getErrorMessage('descricao') });
            this.formGroup;

            console.log('Erro ao incluir' + JSON.stringify(errorResponse));
          },
        });
      } else {
        this.produtoService.update(produto).subscribe({
          next: (produtoCadastrado) => {
            this.router.navigateByUrl('administrador/produto/list');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          },
        });
      }
    }
  }

  getErrorMessage(fieldName: string): string {
    const error = this.apiResponse.errors.find(
      (error: any) => error.fieldName === fieldName
    );
    return error ? error.message : '';
  }

  excluir() {
    const produto = this.formGroup.value;
    if (produto.id != null) {
      this.produtoService.delete(produto).subscribe({
        next: (e) => {
          this.router.navigateByUrl('administrador/produto/list');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        },
      });
    }
  }
}
