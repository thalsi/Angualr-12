import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CollageRoutingModule } from "./collage-routing.module";
import { CollageComponent } from "./collage/collage.component";

@NgModule({
    declarations:[
        CollageComponent,
    ],
    imports:[
        CommonModule,
        CollageRoutingModule,
    ]
})
export class CollageModule { }