import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TemplateSyntaxModule } from './modules/Template-syntax/template-syntax.module';
import { DirectivesModule } from './modules/directives/directives.module';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
