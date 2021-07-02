import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LifeCycleHooksRouterModule } from "./life-cycle-hooks-rotuer.module";
import { HooksComponent } from './life-cycle/hooks/hooks.component';
import { LifeCycleComponent } from "./life-cycle/life-cycle.component";

@NgModule({
    declarations:[
    LifeCycleComponent,
    HooksComponent
  ],
    imports:[
      FormsModule,
      CommonModule ,
      LifeCycleHooksRouterModule],
    exports:[]
})
export class LifeCycleHooksModule {}