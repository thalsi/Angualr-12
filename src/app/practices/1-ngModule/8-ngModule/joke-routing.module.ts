import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JokeComponent } from "./joke/joke.component";

const router:Routes =[
    {
        path:'',
        component:JokeComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(router)
    ],
    exports:[]
})
export class JokeRoutingModule {}