import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entregador } from 'src/app/models/entregador';
import { entregadorService } from 'src/app/services/entregador.service';
@Component({
  selector: 'app-entregador-update',
  templateUrl: './entregador-update.component.html',
  styleUrls: ['./entregador-update.component.css']
})
export class EntregadorUpdateComponent {


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


}
