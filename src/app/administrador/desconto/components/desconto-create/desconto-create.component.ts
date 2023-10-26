import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Desconto } from 'src/app/models/desconto';
import { DescontoService } from 'src/app/services/desconto.service';

@Component({
  selector: 'app-desconto-create',
  templateUrl: './desconto-create.component.html',
  styleUrls: ['./desconto-create.component.css']
})
export class DescontoCreateComponent {
  formGroup: FormGroup;
  descontos: Desconto[] = [];
  pageSize = 2;
  pagina = 0;

  constructor(private formBuilder: FormBuilder,
    private descontoService: DescontoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {


    this.formGroup = this.formBuilder.group({
      id: [null],
      valor: ['', Validators.required],
      descricao: [null]
    })
  }

  ngOnInit(): void {
    this.descontoService.findAll().subscribe(data => {
      this.descontos = data;
      this.initializeForm();
    });
  }
  initializeForm() {
    const desconto: Desconto = this.activatedRoute.snapshot.data['desconto'];

    this.formGroup = this.formBuilder.group({
      id: [(desconto && desconto.id) ? desconto.id : null],
      valor: [(desconto && desconto.valor) ? desconto.valor : '', Validators.required],
      descricao: [(desconto && desconto.descricao) ? desconto.descricao : '', Validators.required],
    })
    console.log(this.formGroup.value);
  }

  salvar() {
    if (this.formGroup.valid) {
      const desconto = this.formGroup.value;
      if (desconto.id == null) {
        this.descontoService.save(desconto).subscribe({
          next: (descontoCadastrado) => {
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.descontoService.update(desconto).subscribe({
          next: (descontoCadastrado) => {
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  excluir() {
    const desconto = this.formGroup.value;
    if (desconto.id != null) {
      this.descontoService.delete(desconto).subscribe({
        next: (e) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.log('Erro ao excluir' + JSON.stringify(err));
        }
      });
    }
  }

  @ViewChild('fileInput') fileInput: any;

  selecionarArquivo() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const arquivo = event.target.files[0];
    // Aqui você pode fazer o que quiser com o arquivo selecionado
    console.log('Arquivo selecionado:', arquivo);
  }
}
