import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PojectRoutesModule } from "./project-routes.module";
import { LoginComponent } from './src/login/login.component';
import { HomeComponent } from './src/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
    LoginComponent,
    HomeComponent
  ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        PojectRoutesModule
    ],
    exports:[]
})
export class ProjectModule {}