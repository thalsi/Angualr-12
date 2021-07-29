import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationsComponent } from './animations/animations.component';

@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
  ]
})
export class AnimationModule { }
