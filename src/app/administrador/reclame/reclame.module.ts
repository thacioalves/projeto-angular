import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclameRoutingModule } from './reclame-routing.module';
import { ReclameCreateComponent } from './components/reclame-create/reclame-create.component';
import { ReclameUpdateComponent } from './components/reclame-update/reclame-update.component';
import { ReclameDeleteComponent } from './components/reclame-delete/reclame-delete.component';


@NgModule({
  declarations: [
    ReclameCreateComponent,
    ReclameUpdateComponent,
    ReclameDeleteComponent
  ],
  imports: [
    CommonModule,
    ReclameRoutingModule
  ]
})
export class ReclameModule { }
