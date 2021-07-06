import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TemplateSyntaxModule } from './modules/Template-syntax/template-syntax.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { DecoratorModule } from './modules/decorator/decorator.module';
import { LifeCycleHooksModule } from './modules/life-cycle-hooks/life-cycle-hooks.module';
import { ServModule } from './modules/services/serv.module';

const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },
  {
    path:'template',
    loadChildren: () => import('./modules/Template-syntax/template-syntax.module').then(m => m.TemplateSyntaxModule)
  },
  {
    path:'directives',
    loadChildren:()=> import('./modules/directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path:'decorator',
    loadChildren:()=> import('./modules/decorator/decorator.module').then(m => m.DecoratorModule)
  },
  {
    path:'life-cycle',
    loadChildren:()=> import('./modules/life-cycle-hooks/life-cycle-hooks.module').then(m => m.LifeCycleHooksModule)
  },
  {
    path:'serveces',
    loadChildren:()=> import('./modules/services/serv.module').then(m => m.ServModule)
  },
  {
    path:'observables',
    loadChildren:()=> import('./modules/observables/observables.module').then(m => m.ObservablesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
