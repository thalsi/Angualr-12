import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FoodComponent } from "./food/food.component";

const router:Routes = [{
    path:'',
    component:FoodComponent
}]

@NgModule({
    imports:[
    RouterModule.forChild(router),        
    ],
    exports:[]
})
export class FoodRoutingModule {}