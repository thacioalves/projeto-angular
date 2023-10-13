import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FidelidadeRoutingModule } from './fidelidade-routing.module';
import { FidelidadeCreateComponent } from './components/fidelidade-create/fidelidade-create.component';
import { FidelidadeUpdateComponent } from './components/fidelidade-update/fidelidade-update.component';
import { FidelidadeDeleteComponent } from './components/fidelidade-delete/fidelidade-delete.component';


@NgModule({
  declarations: [
    FidelidadeCreateComponent,
    FidelidadeUpdateComponent,
    FidelidadeDeleteComponent
  ],
  imports: [
    CommonModule,
    FidelidadeRoutingModule
  ]
})
export class FidelidadeModule { }
