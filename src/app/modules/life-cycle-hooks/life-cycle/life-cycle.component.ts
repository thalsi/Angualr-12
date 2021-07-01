import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
  data:string='';
  list=['abc','amal','aji','anu'];
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(){
    console.log('ngOnchange');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
    let i=0;
    setInterval(()=>{
      this.data=this.list[i];
      i++;
    },3000)
  }

  ngDoCheck(){
    console.log('ngDocheck');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy'); 
  }

}
