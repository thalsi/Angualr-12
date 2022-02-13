import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Angular13Component } from "./angualr-13.component";

const router:Routes =[
    {
        path:'',
        component:Angular13Component
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(router)
    ],
    exports:[RouterModule]
})
export class Auglar13RoutingModule{}