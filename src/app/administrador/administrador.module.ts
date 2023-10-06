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
import { DescontoCreateComponent } from './desconto/components/desconto-create/desconto-create.component';
import { DescontoDeleteComponent } from './desconto/components/desconto-delete/desconto-delete.component';
import { DescontoUpdateComponent } from './desconto/components/desconto-update/desconto-update.component';
import { EstoqueCreateComponent } from './estoque/components/estoque-create/estoque-create.component';
import { EstoqueDeleteComponent } from './estoque/components/estoque-delete/estoque-delete.component';
import { EstoqueUpdateComponent } from './estoque/components/estoque-update/estoque-update.component';
import { FlorCreateComponent } from './flor/components/flor-create/flor-create.component';
import { FlorDeleteComponent } from './flor/components/flor-delete/flor-delete.component';
import { FlorUpdateComponent } from './flor/components/flor-update/flor-update.component';
import { FornecedorCreateComponent } from './fornecedor/components/fornecedor-create/fornecedor-create.component';
import { FornecedorDeleteComponent } from './fornecedor/components/fornecedor-delete/fornecedor-delete.component';
import { FornecedorUpdateComponent } from './fornecedor/components/fornecedor-update/fornecedor-update.component';
import { ProdutoCreateComponent } from './produto/components/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './produto/components/produto-delete/produto-delete.component';
import { ProdutoUpdateComponent } from './produto/components/produto-update/produto-update.component';
import { UsuarioCreateComponent } from './usuario/components/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './usuario/components/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './usuario/components/usuario-update/usuario-update.component';

@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    ProdutoCreateComponent,
    ProdutoDeleteComponent,
    ProdutoUpdateComponent,
    EstoqueCreateComponent,
    EstoqueUpdateComponent,
    EstoqueDeleteComponent,
    DescontoCreateComponent,
    DescontoUpdateComponent,
    DescontoDeleteComponent,
    FlorCreateComponent,
    FlorDeleteComponent,
    FlorUpdateComponent,
    FornecedorCreateComponent,
    FornecedorDeleteComponent,
    FornecedorUpdateComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioUpdateComponent,
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
    SharedModule,
  ],
})
export class AdministradorModule {}
