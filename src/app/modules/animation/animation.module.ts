import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationsComponent } from './animations/animations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AnimationsComponent
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    BrowserAnimationsModule
  ]
})
export class AnimationModule { }
