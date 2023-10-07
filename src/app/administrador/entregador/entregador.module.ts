import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregadorRoutingModule } from './entregador-routing.module';
import { EntregadorCreateComponent } from './components/entregador-create/entregador-create.component';
import { EntregadorUpdateComponent } from './components/entregador-update/entregador-update.component';
import { EntregadorDeleteComponent } from './components/entregador-delete/entregador-delete.component';

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
    EntregadorCreateComponent,
    EntregadorUpdateComponent,
    EntregadorDeleteComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    EntregadorRoutingModule
  ]
})
export class EntregadorModule { }
