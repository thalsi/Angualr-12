import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DirectivesComponent } from "./directives/directives.component";

const routes:Routes=[
    {
        path:'',
        component:DirectivesComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DirectivesRouterModule {}