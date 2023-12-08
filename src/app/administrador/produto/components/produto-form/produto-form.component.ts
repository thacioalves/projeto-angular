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

  fileName: string = '';
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private formBuilder: FormBuilder,
              private produtoService: ProdutoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.formGroup = formBuilder.group({
      id:[null],
      nome:[null],
      descricao:[null],
      preco:[null],
      estoque:[null],
      modalidade:[null]
    });

  }

  initializeForm() {
    const produto: Produto = this.activatedRoute.snapshot.data['produto'];

    // carregando a imagem do preview
    if (produto && produto.nomeImagem) {
      this.imagePreview = this.produtoService.getUrlImagem(produto.nomeImagem);
      this.fileName = produto.nomeImagem;
    }

    this.formGroup = this.formBuilder.group({
      id:[(produto && produto.id) ? produto.id : null],
      nome:[(produto && produto.nome) ? produto.nome : '', Validators.required],
      descricao:[(produto && produto.descricao) ? produto.descricao : '', Validators.required],
      valorUnidade:[(produto && produto.valorUnidade) ? produto.valorUnidade : '', Validators.required],
    });
    console.log(this.formGroup.value);
  }

  salvar() {
    if (this.formGroup.valid) {
      const produto = this.formGroup.value;
      if (produto.id == null) {
        this.produtoService.save(produto).subscribe({
          next: (produtoCadastrada) => {
            this.uploadImage(produtoCadastrada.id);
          },
          error: (errorResponse) => {
             // Processar erros da API
            this.apiResponse = errorResponse.error;

            // Associar erros aos campos do formulário
            this.formGroup.get('nome')?.setErrors({ apiError: this.getErrorMessage('nome') });
            this.formGroup.get('descricao')?.setErrors({ apiError: this.getErrorMessage('descricao') });
            this.formGroup.get('valorUnidade')?.setErrors({ apiError: this.getErrorMessage('valorUnidade') });

            console.log('Erro ao incluir' + JSON.stringify(errorResponse));
          }
        });
      } else {
        this.produtoService.update(produto).subscribe({
          next: (produtoAtualizada) => {
            this.uploadImage(produtoAtualizada.id);
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  getErrorMessage(fieldName: string): string {
    const error = this.apiResponse.errors.find((error: any) => error.fieldName === fieldName);
    return error ? error.message : '';
  }

  excluir() {
    const produto = this.formGroup.value;
    if (produto.id != null) {
      this.produtoService.delete(produto).subscribe({
        next: (e) => {
          this.router.navigateByUrl('/produtos/list');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        }
      });
    }
  }

  carregarImagemSelecionada(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
      // carregando image preview
      const reader = new FileReader();
      reader.onload = e => this.imagePreview = reader.result;
      reader.readAsDataURL(this.selectedFile);
    }

  }

  private uploadImage(produtoId: number) {
    if (this.selectedFile) {
      this.produtoService.uploadImagem(produtoId, this.selectedFile.name, this.selectedFile)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/produtos/list');
        },
        error: err => {
          console.log('Erro ao fazer o upload da imagem');
          // tratar o erro
        }
      })
    } else {
      this.router.navigateByUrl('/produtos/list');
    }
  }
}
