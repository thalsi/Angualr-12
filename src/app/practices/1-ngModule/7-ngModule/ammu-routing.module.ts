import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AmmuComponent } from "./ammu/ammu.component";

const router:Routes =[
    {
        path:"",
        component:AmmuComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(router)
    ],
    exports:[]
})
export class AmmuRoutingModule {}