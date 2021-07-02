import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HooksComponent } from './hooks/hooks.component';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,DoCheck,AfterContentInit {
  binding:string='Angualrr';
  expression:boolean=false;

  constructor() {
  }

  ngOnInit():void{
  }

  ngDoCheck(){
    console.log('PARENT-->ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('PARENT-->ngAfterContentInit');
  }

  showing(){
    this.expression=!this.expression;
  }

}
