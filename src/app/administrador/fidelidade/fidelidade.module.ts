import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { FidelidadeFormComponent } from './components/fidelidade-form/fidelidade-form.component';
import { FidelidadeListComponent } from './components/fidelidade-list/fidelidade-list.component';
import { FidelidadeRoutingModule } from './fidelidade-routing.module';

@NgModule({
  declarations: [
    FidelidadeListComponent,
    FidelidadeFormComponent
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
    FidelidadeRoutingModule,
  ],
})
export class FidelidadeModule {}
