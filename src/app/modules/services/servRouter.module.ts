import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataServies } from "./services/data.servies";
import { TryServesComponent } from './try-serves/try-serves.component';
import { ChildComponent } from './try-serves/child/child.component';

const routers:Routes=[
    {
        path:'',
        component:TryServesComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routers)],
    exports:[RouterModule],
    declarations: [
      TryServesComponent,
      ChildComponent
    ]
    ,providers:[DataServies]
})
export class ServRouterModule {}