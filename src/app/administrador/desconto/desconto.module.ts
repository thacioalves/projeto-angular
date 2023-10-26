import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';

import { DescontoCreateComponent } from './components/desconto-create/desconto-create.component';
import { DescontoDeleteComponent } from './components/desconto-delete/desconto-delete.component';
import { DescontoUpdateComponent } from './components/desconto-update/desconto-update.component';
import { DescontoRoutingModule } from './desconto-routing.module';

@NgModule({
  declarations: [
    DescontoCreateComponent,
    DescontoUpdateComponent,
    DescontoDeleteComponent,
  ],
  imports: [
    CommonModule,
    DescontoRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    SharedModule,
    MatListModule,
    MatCheckboxModule
  ],
})
export class DescontoModule {}
