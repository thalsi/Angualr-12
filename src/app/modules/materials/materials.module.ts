import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialComponent } from './material/material.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    MatButtonModule
  ]
})
export class MaterialsModule { }
