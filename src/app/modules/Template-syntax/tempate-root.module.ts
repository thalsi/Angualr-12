import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TempalteSyntaxComponent } from "./tempalte-syntax/tempalte-syntax.component";

const routes:Routes=[
    {
        path:'',
        component:TempalteSyntaxComponent,
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class TempalteRootModule {}