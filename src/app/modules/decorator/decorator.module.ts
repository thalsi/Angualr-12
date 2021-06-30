import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecoratorComponent } from './decorator/decorator.component';
import { DecoratorRouterModule } from './DecoratorRoter.module';
import { ParentComponent } from './decorator/input-output/parent/parent.component';
import { ChildComponent } from './decorator/input-output/child/child.component';
import { FormsModule } from '@angular/forms';
import { ViewchildComponent } from './decorator/viewchild/viewchild.component';
import { ViewChildComponent } from './decorator/viewchild/view-child/view-child.component';
import { ViewChildrenComponent } from './decorator/view-children/view-children.component';
import { ChildrenComponent } from './decorator/view-children/children/children.component';
import { CustomDirectiveComponent } from './decorator/custom-directive/custom-directive.component';
import { AttributeDirective } from './decorator/custom-directive/custom-attribute/attribute.directive';
import { StructerDirective } from './decorator/custom-directive/custom-structer/structer.directive';
import { HostBandAndHostListenerComponent } from './decorator/host-band-and-host-listener/host-band-and-host-listener.component';
import { HostBandingAndListernerDirective } from './decorator/host-band-and-host-listener/custom/host-banding-and-listerner.directive';


@NgModule({
  declarations: [
    DecoratorComponent,
    ParentComponent,
    ChildComponent,
    ViewchildComponent,
    ViewChildComponent,
    ViewChildrenComponent,
    ChildrenComponent,
    CustomDirectiveComponent,
    AttributeDirective,
    StructerDirective,
    HostBandAndHostListenerComponent,
    HostBandingAndListernerDirective
  ],
  imports: [
    CommonModule,
    DecoratorRouterModule,
    FormsModule,
  ]
})
export class DecoratorModule { }
