import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MyPipe } from "./pipe/my-pipe.pipe";
import { TempalteSyntaxComponent } from "./tempalte-syntax/tempalte-syntax.component";
import { TempalteRootModule } from "./tempate-root.module";

@NgModule({
    declarations:[TempalteSyntaxComponent,MyPipe],
    imports:[
        TempalteRootModule,
        FormsModule
    ]
})
export class TemplateSyntaxModule { }