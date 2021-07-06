import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ObservablesComponent } from "./observables/observables.component";

const routes:Routes=[
    {
        path:'',
        component:ObservablesComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ObservablesRouter {}