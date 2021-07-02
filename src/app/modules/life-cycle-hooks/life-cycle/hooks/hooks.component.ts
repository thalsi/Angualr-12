import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit  {
  @Input() name:string='';
  data:any=null;
  constructor() {
    console.log('CHILD-->constructor');
  }

  ngOnChanges(){
    console.log('CHILD-->ngOnChanges');
  }

  ngOnInit(): void {
    console.log('CHILD-->ngOnInit');
    // this.data=setInterval(()=>{
    //   // console.log(new Date());
    // },1000);
  }

  ngDoCheck(){
    console.log('CHILD-->ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('CHILD-->ngAfterContentInit');
  }

  ngAfterViewInit(){
    console.log('CHILD-->ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('CHILD-->ngAfterViewChecked');
  }

  ngOnDestroy(){
    if(this.data){
      clearInterval(this.data);
    }
    console.log('CHILD-->ngOnDestroy'); 
  }

}
