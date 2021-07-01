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
    
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
