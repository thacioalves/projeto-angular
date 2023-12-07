import { TipoFlor } from './../../../../models/tipoflor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flor } from 'src/app/models/flor';
import { FlorService } from 'src/app/services/flor.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-flor-form',
  templateUrl: './flor-form.component.html',
  styleUrls: ['./flor-form.component.css'],
})
export class FlorFormComponent {
  formGroup: FormGroup;
  apiResponse: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private florService: FlorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const flor: Flor = this.activatedRoute.snapshot.data['flor'];

    this.formGroup = formBuilder.group({
      id: [flor && flor.id ? flor.id : null],
      corPetalas: [
        flor && flor.corPetalas ? flor.corPetalas : '',
        Validators.required,
      ],
      alturaCaule: [
        flor && flor.alturaCaule ? flor.alturaCaule : '',
        Validators.required,
      ],
      fornecedor: [
        flor && flor.fornecedor ? flor.fornecedor : '',
        Validators.required,
      ],
      tipoFlor: [
        flor && flor.tipoflor ? flor.tipoflor : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const flor = this.formGroup.value;
      if (flor.id == null) {
        this.florService.save(flor).subscribe({
          next: (florCadastrado) => {
            this.router.navigateByUrl('administrador/flor/list');
          },
          error: (errorResponse) => {
            // Processar erros da API
            this.apiResponse = errorResponse.error;

            // Associar erros aos campos do formulário
            this.formGroup
              .get('corPetalas')
              ?.setErrors({ apiError: this.getErrorMessage('corPetalas') });
            this.formGroup
              .get('alturaCaule')
              ?.setErrors({ apiError: this.getErrorMessage('alturaCaule') });
            this.formGroup
              .get('fornecedor')
              ?.setErrors({ apiError: this.getErrorMessage('fornecedor') });
            this.formGroup
              .get('tipoFlor')
              ?.setErrors({ apiError: this.getErrorMessage('tipoFlor') });

            console.log('Erro ao incluir' + JSON.stringify(errorResponse));
          },
        });
      } else {
        this.florService.update(flor).subscribe({
          next: (florCadastrado) => {
            this.router.navigateByUrl('administrador/flor/list');
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
    const flor = this.formGroup.value;
    if (flor.id != null) {
      this.florService.delete(flor).subscribe({
        next: (e) => {
          this.router.navigateByUrl('administrador/flor/list');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        },
      });
    }
  }
}
