import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)
  },
  {
    path: 'poject',
    loadChildren: () => import('./Project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./modules/Template-syntax/template-syntax.module').then(m => m.TemplateSyntaxModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./modules/directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'decorator',
    loadChildren: () => import('./modules/decorator/decorator.module').then(m => m.DecoratorModule)
  },
  {
    path: 'life-cycle',
    loadChildren: () => import('./modules/life-cycle-hooks/life-cycle-hooks.module').then(m => m.LifeCycleHooksModule)
  },
  {
    path: 'serveces',
    loadChildren: () => import('./modules/services/serv.module').then(m => m.ServModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./modules/observables/observables.module').then(m => m.ObservablesModule)
  },
  {
    path: 'http',
    loadChildren: () => import('./modules/http/http-try.module').then(m => m.HttpTryModules)
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'router',
    loadChildren: () => import('./modules/routing/routing.module').then(m => m.RoutingModule)
  },
  {
    path: 'change-detection',
    loadChildren: () => import('./modules/changeDetection/changeDetection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'animation',
    loadChildren: () => import('./modules/animation/animation.module').then(m => m.AnimationModule)
  },
  {
    path: 'materials',
    loadChildren: () => import('./modules/materials/materials.module').then(m => m.MaterialsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
