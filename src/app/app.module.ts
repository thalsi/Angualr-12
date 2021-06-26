import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateSyntaxModule } from './modules/Template-syntax/template-syntax.module';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { ListComponent } from './list/list.component';
import { DirectivesModule } from './modules/directives/directives.module';

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
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
