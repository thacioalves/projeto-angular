import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entregador } from 'src/app/models/entregador';
import { entregadorService } from 'src/app/services/entregador.service';

@Component({
  selector: 'app-entregador-create',
  templateUrl: './entregador-create.component.html',
  styleUrls: ['./entregador-create.component.css']
})
export class EntregadorCreateComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private entregadorService: entregadorService,
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
