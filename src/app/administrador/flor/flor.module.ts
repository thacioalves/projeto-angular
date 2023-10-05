import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlorRoutingModule } from './flor-routing.module';
import { FlorCreateComponent } from './components/flor-create/flor-create.component';
import { FlorDeleteComponent } from './components/flor-delete/flor-delete.component';
import { FlorUpdateComponent } from './components/flor-update/flor-update.component';


@NgModule({
  declarations: [
    FlorCreateComponent,
    FlorDeleteComponent,
    FlorUpdateComponent
  ],
  imports: [
    CommonModule,
    FlorRoutingModule
  ]
})
export class FlorModule { }
