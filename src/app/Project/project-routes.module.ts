import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthCancelService } from "./guard/auth-cancel.service";
import { AuthGuardService } from "./guard/auth-guard.service";
import { HomeComponent } from "./src/home/home.component";
import { LoginComponent } from "./src/login/login.component";

const routes:Routes=[
    {
    path:'',
    component:LoginComponent,
    canActivate:[AuthCancelService]
    },
    {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuardService]
    }
    
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PojectRoutesModule {}