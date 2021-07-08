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
    
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
