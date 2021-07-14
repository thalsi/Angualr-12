import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TemplateSyntaxModule } from './modules/Template-syntax/template-syntax.module';
import { DirectivesModule } from './modules/directives/directives.module';
import { DecoratorModule } from './modules/decorator/decorator.module';
import { LifeCycleHooksModule } from './modules/life-cycle-hooks/life-cycle-hooks.module';
import { ServModule } from './modules/services/serv.module';
import { HttpTryModules } from './modules/http/http-try.module';
import { FormModule } from './modules/form/form.module';
import { ChangeDetectionModule } from './modules/changeDetection/changeDetection.module';
import { ProjectModule } from './Project/project.module';

const routes: Routes = [
  {
    path:'',
    component:ListComponent
  },
  {
    path:'poject',
    loadChildren: () => import('./Project/project.module').then(m => m.ProjectModule)
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
  },
  {
    path:'http',
    loadChildren:()=> import('./modules/http/http-try.module').then(m => m.HttpTryModules)
  },
  {
    path:'form',
    loadChildren:()=> import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path:'router',
    loadChildren:()=> import('./modules/routing/routing.module').then(m => m.RoutingModule)
  },
  {
    path:'change-detection',
    loadChildren:()=> import('./modules/changeDetection/changeDetection.module').then(m => m.ChangeDetectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
