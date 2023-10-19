import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FidelidadeRoutingModule } from './fidelidade-routing.module';
import { FidelidadeCreateComponent } from './components/fidelidade-create/fidelidade-create.component';
import { FidelidadeUpdateComponent } from './components/fidelidade-update/fidelidade-update.component';
import { FidelidadeDeleteComponent } from './components/fidelidade-delete/fidelidade-delete.component';

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
    FidelidadeCreateComponent,
    FidelidadeUpdateComponent,
    FidelidadeDeleteComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    FidelidadeRoutingModule
  ]
})
export class FidelidadeModule { }
