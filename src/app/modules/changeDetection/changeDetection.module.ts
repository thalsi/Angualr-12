import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ChangeDetectionRouterModule } from "./changeDetectionRouter.module";
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DefaultComponent } from './change-detection/default/default.component';
import { OnpushComponent } from './change-detection/onpush/onpush.component';
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations:[
    ChangeDetectionComponent,
    DefaultComponent,
    OnpushComponent
  ],
    imports:[
        CommonModule,
        FormsModule,
        ChangeDetectionRouterModule
    ],
    exports:[]
})
export class ChangeDetectionModule {}