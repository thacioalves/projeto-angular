import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flor } from 'src/app/models/flor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { FlorService } from 'src/app/services/flor.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-flor-create',
  templateUrl: './flor-create.component.html',
  styleUrls: ['./flor-create.component.css']
})
export class FlorCreateComponent implements OnInit {
  formGroup: FormGroup;
  flores: Flor[] = [];
  pageSize = 2;
  pagina = 0;

  constructor(private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private florService: FlorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {


    this.formGroup = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      estado: [null]
    })
  }

  ngOnInit(): void {
    this.florService.findAll().subscribe(data => {
      this.flores = data;
      this.initializeForm();
    });
  }
  initializeForm() {
    const flor: Flor = this.activatedRoute.snapshot.data['flor'];

    this.formGroup = this.formBuilder.group({
      id: [(flor && flor.id) ? flor.id : null],
      corPetalas: [(flor && flor.corPetalas) ? flor.corPetalas : '', Validators.required],
      alturaCaule: [(flor && flor.alturaCaule) ? flor.alturaCaule : '', Validators.required],
      fornecedor: [(flor && flor.corPetalas) ? flor.corPetalas : '', Validators.required],
      flor: [flor]
    })
    console.log(this.formGroup.value);
  }

  salvar() {
    if (this.formGroup.valid) {
      const flor = this.formGroup.value;
      if (flor.id == null) {
        this.florService.save(flor).subscribe({
          next: (florCadastrado) => {
            this.router.navigateByUrl('/cidades/list');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.florService.update(flor).subscribe({
          next: (florCadastrado) => {
            this.router.navigateByUrl('/flores/list');
          },
          error: (err) => {
            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  excluir() {
    const flor = this.formGroup.value;
    if (flor.id != null) {
      this.florService.delete(flor).subscribe({
        next: (e) => {
          this.router.navigateByUrl('/flores/list');
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
