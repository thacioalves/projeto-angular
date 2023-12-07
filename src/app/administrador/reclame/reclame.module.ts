import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { ReclameFormComponent } from './components/reclame-form/reclame-form.component';
import { ReclameListComponent } from './components/reclame-list/reclame-list.component';
import { ReclameRoutingModule } from './reclame-routing.module';

@NgModule({
  declarations: [
    ReclameListComponent,
    ReclameFormComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule,
    ReclameRoutingModule
  ]
})
export class ReclameModule { }
