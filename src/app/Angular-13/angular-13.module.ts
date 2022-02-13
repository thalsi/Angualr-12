import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Auglar13RoutingModule } from "./angualr-13-routing.module";
import { Angular13Component } from "./angualr-13.component";

@NgModule({
    declarations:[
        Angular13Component
    ],
    imports:[
        CommonModule,
        Auglar13RoutingModule,
    ]
})
export class Angular13Module { }