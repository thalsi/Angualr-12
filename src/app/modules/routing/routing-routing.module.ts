import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./user/home/home.component";
import { DetialComponent } from "./user/list/detial/detial.component";
import { ListComponent } from "./user/list/list.component";
import { UserComponent } from "./user/user.component";

const routes:Routes=[
    {
        path:'', redirectTo:'user', pathMatch:'full'
    },
    {
        path:'user', component:UserComponent,
        children:[
            {
                path:'', redirectTo:'home', pathMatch:'full'
            },
            {
                path:'home',component:HomeComponent
            },
            {
                path:'list',component:ListComponent,
                // children:[
                //     {
                //         path:':id',
                //         component:DetialComponent
                //     }
                // ]
            },{
                path:'list/:id',
                component:DetialComponent
            }
        ]
    },
    // {
    //     path:'**', component:PageNotFoundComponent,//wildcard routing
    // }

]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RoutingRoutingModule {}