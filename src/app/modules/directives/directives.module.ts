import { NgModule } from "@angular/core";
import { DirectivesRouterModule } from "./directivesRouters.module";
import { DirectivesComponent } from './directives/directives.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { CustomAttributeDirective } from './directives/custom/attribute/custom-attribute.directive';
import { CustomStructerDirective } from './directives/custom/structral/custom-structer.directive';

@NgModule({
    declarations:[
    DirectivesComponent,
    CustomAttributeDirective,
    CustomStructerDirective,
  ],
    imports:[
        CommonModule,
        DirectivesRouterModule
    ],
    exports:[]
})
export class DirectivesModule {}