import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entregador } from 'src/app/models/entregador';
import { EntregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-entregador-form',
  templateUrl: './entregador-form.component.html',
  styleUrls: ['./entregador-form.component.css']
})
export class EntregadorFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private entregadorService: EntregadorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const entregador: Entregador = this.activatedRoute.snapshot.data['estado'];

    this.formGroup = formBuilder.group({
      id: [(entregador && entregador.id) ? entregador.id : null],
      nome: [(entregador && entregador.nomeEntregador) ? entregador.nomeEntregador : '', Validators.required],
      CNPJ: [(entregador && entregador.CNPJ) ? entregador.CNPJ : '', Validators.required],
      chaveRastreio: [(entregador && entregador.chaveRastreio) ? entregador.chaveRastreio : '', Validators.required],
      idProduto: [(entregador && entregador.idProduto) ? entregador.idProduto : '', Validators.required]
    })
  }

  salvar() {
    if (this.formGroup.valid) {
      const entregador = this.formGroup.value;
      if (entregador.id == null) {
        this.entregadorService.save(entregador).subscribe({
          next: (entregadorCadastrado) => {
            this.router.navigateByUrl('/entregador/create');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.entregadorService.update(entregador).subscribe({
          next: (entregadorCadastrado) => {
            this.router.navigateByUrl('/entregador/create');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }
}
