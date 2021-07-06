import { NgModule } from "@angular/core";
import { ObservablesComponent } from "./observables/observables.component";
import { ObservablesRouter } from "./observablesRouter.module";
import { ChildComponent } from './observables/child/child.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ObservablesComponent,
         ChildComponent],
    imports:[
        CommonModule,
        ObservablesRouter],
    exports:[]
})
export class ObservablesModule {}