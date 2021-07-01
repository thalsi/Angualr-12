import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnChanges,DoCheck,OnDestroy  {
  @Input() data:any;
  constructor() {
    console.log('Child...constructor');
  }

  ngOnChanges(simple:SimpleChanges){
    console.log(simple);
    
    console.log('Child...ngOnchange');
  }
  
  ngOnInit(): void {
    console.log('Child...ngOnInit');
  }

  ngDoCheck(){
    console.log('Child...ngDocheck');
  }

  ngOnDestroy(){
    console.log('Child...ngOnDestroy'); 
  }

}
