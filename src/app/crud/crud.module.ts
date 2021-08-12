import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { UserComponent } from './user/user.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormModule } from '../modules/form/form.module';


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CrudModule { }
