import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GioRoutingModule } from "./gio-routing.module";
import { GioComponent } from "./gio/gio.component"

@NgModule({
    declarations:[
        GioComponent
    ],
    imports:[
        CommonModule,
        GioRoutingModule
    ]
})
export class GioModule { }