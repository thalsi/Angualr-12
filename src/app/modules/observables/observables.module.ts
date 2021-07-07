import { NgModule } from "@angular/core";
import { ObservablesComponent } from "./observables/observables.component";
import { ObservablesRouter } from "./observablesRouter.module";
import { ChildComponent } from './observables/child/child.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations:[
        ObservablesComponent,
         ChildComponent],
    imports:[
        HttpClientModule,
        CommonModule,
        ObservablesRouter],
    exports:[]
})
export class ObservablesModule {}