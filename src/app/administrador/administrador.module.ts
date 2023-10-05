import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DescontoComponent } from './components/desconto/desconto.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { ProdutoComponent } from './components/produto/produto.component';


@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    DescontoComponent,
    EstoqueComponent,
    ProdutoComponent
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
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    SharedModule
  ]
})
export class AdministradorModule { }
