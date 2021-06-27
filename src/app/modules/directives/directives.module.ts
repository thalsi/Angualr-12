import { NgModule } from "@angular/core";
import { DirectivesRouterModule } from "./directivesRouters.module";
import { DirectivesComponent } from './directives/directives.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
    DirectivesComponent,
  ],
    imports:[
        CommonModule,
        DirectivesRouterModule
    ],
    exports:[]
})
export class DirectivesModule {}