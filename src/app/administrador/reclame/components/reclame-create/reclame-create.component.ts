import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclame } from 'src/app/models/reclame';
import { ReclameService } from 'src/app/services/reclame.service';

@Component({
  selector: 'app-reclame-create',
  templateUrl: './reclame-create.component.html',
  styleUrls: ['./reclame-create.component.css']
})
export class ReclameCreateComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private reclameService: ReclameService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const reclame: Reclame = this.activatedRoute.snapshot.data['estado'];

    this.formGroup = formBuilder.group({
      id: [(reclame && reclame.id) ? reclame.id : null],
      idUsuario: [(reclame && reclame.idUsuario) ? reclame.idUsuario : '', Validators.required],
      idProduto: [(reclame && reclame.idProduto) ? reclame.idProduto : '', Validators.required],
      reclamacao: [(reclame && reclame.reclamacao) ? reclame.reclamacao : '', Validators.required]
    })
  }

  salvar() {
    if (this.formGroup.valid) {
      const reclame = this.formGroup.value;
      if (reclame.id == null) {
        this.reclameService.save(reclame).subscribe({
          next: (reclameService) => {
            this.router.navigateByUrl('/reclame/create');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.reclameService.update(reclame).subscribe({
          next: (reclameService) => {
            this.router.navigateByUrl('/reclame/create');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }
}
