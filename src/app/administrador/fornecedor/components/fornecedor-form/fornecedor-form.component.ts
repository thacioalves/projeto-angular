import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css'],
})
export class FornecedorFormComponent {
  formGroup: FormGroup;
  apiResponse: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const fornecedor: Fornecedor =
      this.activatedRoute.snapshot.data['fornecedor'];

    this.formGroup = formBuilder.group({
      id: [fornecedor && fornecedor.id ? fornecedor.id : null],
      nome: [
        fornecedor && fornecedor.nome ? fornecedor.nome : '',
        Validators.required,
      ],
      pais: [
        fornecedor && fornecedor.pais ? fornecedor.pais : '',
        Validators.required,
      ],
      safra: [
        fornecedor && fornecedor.safra ? fornecedor.safra : '',
        Validators.required,
      ],
      volume: [
        fornecedor && fornecedor.volume ? fornecedor.volume : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const fornecedor = this.formGroup.value;
      if (fornecedor.id == null) {
        this.fornecedorService.save(fornecedor).subscribe({
          next: (fornecedorCadastrado) => {
            this.router.navigateByUrl('administrador/fornecedor/list');
          },
          error: (errorResponse) => {
            // Processar erros da API
            this.apiResponse = errorResponse.error;

            // Associar erros aos campos do formulário
            this.formGroup
              .get('nome')
              ?.setErrors({ apiError: this.getErrorMessage('nome') });
            this.formGroup
              .get('pais')
              ?.setErrors({ apiError: this.getErrorMessage('pais') });
            this.formGroup
              .get('safra')
              ?.setErrors({ apiError: this.getErrorMessage('safra') });
            this.formGroup
              .get('tvolume')
              ?.setErrors({ apiError: this.getErrorMessage('volume') });

            console.log('Erro ao incluir' + JSON.stringify(errorResponse));
          },
        });
      } else {
        this.fornecedorService.update(fornecedor).subscribe({
          next: (fornecedorCadastrado) => {
            this.router.navigateByUrl('administrador/fornecedor/list');
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
    const fornecedor = this.formGroup.value;
    if (fornecedor.id != null) {
      this.fornecedorService.delete(fornecedor).subscribe({
        next: (e) => {
          this.router.navigateByUrl('administrador/fornecedor/list');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        },
      });
    }
  }
}
