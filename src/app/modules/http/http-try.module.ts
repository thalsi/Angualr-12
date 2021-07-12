import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpTryRouterModule } from "./http-try-routers.module";
import { HttpComponent } from "./http/http.component";

@NgModule({
    declarations:[HttpComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        HttpTryRouterModule,
        HttpClientModule
    ],
    exports:[]
})
export class HttpTryModules {}