import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Flor } from 'src/app/models/flor';
import { FlorService } from 'src/app/services/flor.service';

@Component({
  selector: 'app-flor-delete',
  templateUrl: './flor-delete.component.html',
  styleUrls: ['./flor-delete.component.css'],

})

export class FlorDeleteComponent {
  tableColumns: string[] = ['check-column', 'nome-column'];
  flor: Flor[] = [];

  constructor(private florService: FlorService) { }

  ngOnInit(): void {
    this.florService.findAll().subscribe(data => {
      this.flor = data;
    });
  }

  disableSelect = new FormControl(false);
}


