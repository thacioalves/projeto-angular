import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclameRoutingModule } from './reclame-routing.module';
import { ReclameCreateComponent } from './components/reclame-create/reclame-create.component';
import { ReclameUpdateComponent } from './components/reclame-update/reclame-update.component';
import { ReclameDeleteComponent } from './components/reclame-delete/reclame-delete.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


import {MatListModule} from '@angular/material/list';

import { ReactiveFormsModule } from '@angular/forms';


import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ReclameCreateComponent,
    ReclameUpdateComponent,
    ReclameDeleteComponent
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
