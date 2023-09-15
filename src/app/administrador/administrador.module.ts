import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class AdministradorModule { }
