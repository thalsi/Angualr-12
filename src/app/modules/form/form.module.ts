import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TempateDrivenFormComponent } from './form/tempate-driven-form/tempate-driven-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    TempateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ]
})
export class FormModule { }
