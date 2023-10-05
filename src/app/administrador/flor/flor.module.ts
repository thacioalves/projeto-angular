import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FlorCreateComponent } from './components/flor-create/flor-create.component';
import { FlorDeleteComponent } from './components/flor-delete/flor-delete.component';
import { FlorUpdateComponent } from './components/flor-update/flor-update.component';
import { FlorRoutingModule } from './flor-routing.module';


@NgModule({
  declarations: [
    FlorCreateComponent,
    FlorDeleteComponent,
    FlorUpdateComponent
  ],
  imports: [
    CommonModule,
    FlorRoutingModule,
    SharedModule
  ]
})
export class FlorModule { }
