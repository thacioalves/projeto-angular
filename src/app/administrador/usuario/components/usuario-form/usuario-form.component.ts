import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
})
export class UsuarioFormComponent {
  formGroup: FormGroup;
  apiResponse: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];

    this.formGroup = formBuilder.group({
      id: [usuario && usuario.id ? usuario.id : null],
      nome: [usuario && usuario.nome ? usuario.nome : '', Validators.required],
      cpf: [usuario && usuario.cpf ? usuario.cpf : '', Validators.required],
      login: [
        usuario && usuario.login ? usuario.login : '',
        Validators.required,
      ],
      senha: [
        usuario && usuario.senha ? usuario.senha : '',
        Validators.required,
      ],
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const usuario = this.formGroup.value;
      if (usuario.id == null) {
        this.usuarioService.save(usuario).subscribe({
          next: (usuarioCadastrado) => {
            this.router.navigateByUrl('administrador/usuario/list');
          },
          error: (errorResponse) => {
            // Processar erros da API
            this.apiResponse = errorResponse.error;

            // Associar erros aos campos do formulário
            this.formGroup
              .get('nome')
              ?.setErrors({ apiError: this.getErrorMessage('nome') });
            this.formGroup
              .get('cpf')
              ?.setErrors({ apiError: this.getErrorMessage('cpf') });
            this.formGroup
              .get('login')
              ?.setErrors({ apiError: this.getErrorMessage('login') });
            this.formGroup

            console.log('Erro ao incluir' + JSON.stringify(errorResponse));
          },
        });
      } else {
        this.usuarioService.update(usuario).subscribe({
          next: (usuarioCadastrado) => {
            this.router.navigateByUrl('administrador/usuario/list');
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
    const usuario = this.formGroup.value;
    if (usuario.id != null) {
      this.usuarioService.delete(usuario).subscribe({
        next: (e) => {
          this.router.navigateByUrl('administrador/usuario/list');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        },
      });
    }
  }
}
