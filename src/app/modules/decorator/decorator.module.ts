import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator/decorator.component';
import { DecoratorRouterModule } from './DecoratorRoter.module';



@NgModule({
  declarations: [
    DecoratorComponent
  ],
  imports: [
    CommonModule,
    DecoratorRouterModule
  ]
})
export class DecoratorModule { }
