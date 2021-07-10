import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutingRoutingModule } from "./routing-routing.module";
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './user/home/home.component';
import { ListComponent } from './user/list/list.component';
import { DetialComponent } from './user/list/detial/detial.component';

@NgModule({
    declarations:[
    UserComponent,
    PageNotFoundComponent,
    HomeComponent,
    ListComponent,
    DetialComponent,
  ],
    imports:[
        CommonModule,
        RoutingRoutingModule
    ],
    exports:[],
})
export class RoutingModule {}