import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';

import { FlorCreateComponent } from './components/flor-create/flor-create.component';
import { FlorDeleteComponent } from './components/flor-delete/flor-delete.component';
import { FlorUpdateComponent } from './components/flor-update/flor-update.component';
import { FlorRoutingModule } from './flor-routing.module';


@NgModule({
  declarations: [
    FlorCreateComponent,
    FlorDeleteComponent,
    FlorUpdateComponent
  ],
  imports: [
    CommonModule,
    FlorRoutingModule,
    SharedModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule
  ]
})
export class FlorModule { }
