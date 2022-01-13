import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollageComponent } from "./collage/collage.component";

const router:Routes = [
    {
        path:'',
        component:CollageComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(router)
    ],
    exports:[]
})
export class CollageRoutingModule {}