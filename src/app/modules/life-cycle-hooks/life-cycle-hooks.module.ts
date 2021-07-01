import { NgModule } from "@angular/core";
import { LifeCycleHooksRouterModule } from "./life-cycle-hooks-rotuer.module";
import { HooksComponent } from './life-cycle/hooks/hooks.component';
import { LifeCycleComponent } from "./life-cycle/life-cycle.component";

@NgModule({
    declarations:[
    LifeCycleComponent,
    HooksComponent
  ],
    imports:[LifeCycleHooksRouterModule],
    exports:[]
})
export class LifeCycleHooksModule {}