import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GioComponent } from "./gio/gio.component";

const router:Routes= [
    {
        path:'',
        component:GioComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(router),
    ],
    exports:[]
})
export class GioRoutingModule {}