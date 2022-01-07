import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { School } from "./school/school.component";


const router:Routes =[
    {
        path:'',
        component:School
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(router),
    ],
    exports:[]
})
export class SchoolRoutingModule {}