import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateSyntaxModule } from './modules/Template-syntax/template-syntax.module';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { ListComponent } from './list/list.component';
import { DirectivesModule } from './modules/directives/directives.module';
import { DecoratorModule } from './modules/decorator/decorator.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { LifeCycleHooksModule } from './modules/life-cycle-hooks/life-cycle-hooks.module';
import { ServModule } from './modules/services/serv.module';
import { ObservablesModule } from './modules/observables/observables.module';
import { HttpTryModules } from './modules/http/http-try.module';
import { FormModule } from './modules/form/form.module';
import { RoutingModule } from './modules/routing/routing.module';
import { ChangeDetectionModule } from './modules/changeDetection/changeDetection.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './modules/http/server/Interceptors/my.interceptor';
import { ProjectModule } from './Project/project.module';
import { AnimationModule } from './modules/animation/animation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudModule } from './crud/crud.module';
import { MaterialsModule } from './modules/materials/materials.module';
import { SchoolModule } from './practices/1-ngModule/5-ngModule/school.module';
import { GioModule } from './practices/1-ngModule/9-ngModule/gio.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayGroundComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateSyntaxModule,
    DirectivesModule,
    DecoratorModule,
    LifeCycleHooksModule,
    ServModule,
    ObservablesModule,
    HttpTryModules,
    FormModule,
    RoutingModule,
    ChangeDetectionModule,
    ProjectModule,
    AnimationModule,
    CrudModule,
    MaterialsModule,
    SchoolModule,
    GioModule,


    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
