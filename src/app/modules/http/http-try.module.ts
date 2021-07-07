import { NgModule } from "@angular/core";
import { HttpTryRouterModule } from "./http-try-routers.module";
import { HttpComponent } from "./http/http.component";

@NgModule({
    declarations:[HttpComponent],
    imports:[HttpTryRouterModule],
    exports:[]
})
export class HttpTryModules {}