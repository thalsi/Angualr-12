import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Home } from "./login/home/home.component";
import { Loginfb } from "./login/Login-fb/login-fb.compoent";
import { Login } from "./login/login.component";

const routers: Routes=[{
    path:'',
    component:Login
}];
@NgModule({
    declarations:[ Login,Home,Loginfb],
    imports:[RouterModule.forRoot(routers)],
    exports:[Home],
    providers:[],
    // bootstrap:[Login],
})
export class Test {}