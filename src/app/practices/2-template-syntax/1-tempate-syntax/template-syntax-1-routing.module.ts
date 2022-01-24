import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TempateSynatx1Component } from "./template-syntax-1/tempate-synatx-1.component";

const router:Routes =[
    {
        path:'',
        component:TempateSynatx1Component
    }
]

@NgModule({
    imports:[ RouterModule.forChild(router)],
    exports:[],
})
export class tempateSynatx1Routing {}