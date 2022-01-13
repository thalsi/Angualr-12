import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AmmuRoutingModule } from "./ammu-routing.module";
import { AmmuComponent } from "./ammu/ammu.component";

@NgModule({
    declarations:[
        AmmuComponent
    ],
    imports:[
        CommonModule,
        AmmuRoutingModule
    ] 
})
export class AmmuModule {}