import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator/decorator.component';
import { DecoratorRouterModule } from './DecoratorRoter.module';
import { ParentComponent } from './decorator/parent/parent.component';
import { ChildComponent } from './decorator/child/child.component';



@NgModule({
  declarations: [
    DecoratorComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DecoratorRouterModule
  ]
})
export class DecoratorModule { }
