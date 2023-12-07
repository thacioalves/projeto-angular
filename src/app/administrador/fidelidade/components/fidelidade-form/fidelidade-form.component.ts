import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fidelidade } from 'src/app/models/fidelidade';
import { FidelidadeService } from 'src/app/services/fidelidade.service';

@Component({
  selector: 'app-fidelidade-form',
  templateUrl: './fidelidade-form.component.html',
  styleUrls: ['./fidelidade-form.component.css']
})
export class FidelidadeFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private fidelidadeService: FidelidadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const fidelidade: Fidelidade = this.activatedRoute.snapshot.data['estado'];

    this.formGroup = formBuilder.group({
      id: [(fidelidade && fidelidade.id) ? fidelidade.id : null],
      idUsuario: [(fidelidade && fidelidade.idUsuario) ? fidelidade.idUsuario : '', Validators.required],
      idDesconto: [(fidelidade && fidelidade.idDesconto) ? fidelidade.idDesconto : '', Validators.required]
    })
  }

  salvar() {
    if (this.formGroup.valid) {
      const fidelidade = this.formGroup.value;
      if (fidelidade.id == null) {
        this.fidelidadeService.save(fidelidade).subscribe({
          next: (fidelidadeService) => {
            this.router.navigateByUrl('/fidelidade/create');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.fidelidadeService.update(fidelidade).subscribe({
          next: (fidelidadeService) => {
            this.router.navigateByUrl('/fidelidade/create');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }
}
