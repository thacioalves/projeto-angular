import { Component, OnInit } from '@angular/core';
import { Flor } from 'src/app/models/flor';
import { PageEvent } from '@angular/material/paginator';
import { FlorService } from 'src/app/services/flor.service';

@Component({
  selector: 'app-flor-list',
  templateUrl: './flor-list.component.html',
  styleUrls: ['./flor-list.component.css'],
})
export class FlorListComponent implements OnInit {
  tableColumns: string[] = [
    'id-column',
    'corPetalas-column',
    'alturaCaule-column',
    'fornecedor-column',
    'tipoFlor-column',
    'acao-column',
  ];
  flors: Flor[] = [];
  totalRegistros = 0;
  pageSize = 2;
  pagina = 0;
  filtro: string = '';

  constructor(private florService: FlorService) {}

  ngOnInit(): void {
    this.carregarFlors();
    this.carregarTotalRegistros();
  }

  carregarFlors() {
    // se existe dados no filtro
    if (this.filtro) {
      this.florService
        .findByNome(this.filtro, this.pagina, this.pageSize)
        .subscribe((data) => {
          this.flors = data;
        });
    } else {
      // buscando todos os flors
      this.florService.findAll(this.pagina, this.pageSize).subscribe((data) => {
        this.flors = data;
      });
    }
  }

  carregarTotalRegistros() {
    // se existe dados no filtro
    if (this.filtro) {
      this.florService.countByNome(this.filtro).subscribe((data) => {
        this.totalRegistros = data;
      });
    } else {
      this.florService.count().subscribe((data) => {
        this.totalRegistros = data;
      });
    }
  }

  // Método para paginar os resultados
  paginar(event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarFlors();
  }

  aplicarFiltro() {
    this.carregarFlors();
    this.carregarTotalRegistros();
  }
}
