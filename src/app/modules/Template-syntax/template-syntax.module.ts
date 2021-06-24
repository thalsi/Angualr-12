import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TempalteSyntaxComponent } from "./tempalte-syntax/tempalte-syntax.component";
import { TempalteRootModule } from "./tempate-root.module";

@NgModule({
    declarations:[TempalteSyntaxComponent],
    imports:[TempalteRootModule]
})
export class TemplateSyntaxModule { }