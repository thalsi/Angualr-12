import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator/decorator.component';
import { DecoratorRouterModule } from './DecoratorRoter.module';
import { ParentComponent } from './decorator/input-output/parent/parent.component';
import { ChildComponent } from './decorator/input-output/child/child.component';
import { FormsModule } from '@angular/forms';
import { ViewchildComponent } from './decorator/viewchild/viewchild.component';
import { ViewChildComponent } from './decorator/viewchild/view-child/view-child.component';


@NgModule({
  declarations: [
    DecoratorComponent,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    ViewChildComponent
  ],
  imports: [
    CommonModule,
    DecoratorRouterModule,
    FormsModule,
  ]
})
export class DecoratorModule { }
