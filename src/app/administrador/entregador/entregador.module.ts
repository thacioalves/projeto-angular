import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { EntregadorFormComponent } from './components/entregador-form/entregador-form.component';
import { EntregadorListComponent } from './components/entregador-list/entregador-list.component';
import { EntregadorRoutingModule } from './entregador-routing.module';

@NgModule({
  declarations:[
    EntregadorListComponent,
    EntregadorFormComponent
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
    EntregadorRoutingModule,
  ],
})
export class EntregadorModule {}
