import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../../viewchild/viewchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  ParentValue='Parent values is here';
  randomData:number=0;
  childVlaue:string='';

  constructor() { }

  ngOnInit(): void {

  }

  passData(){
    let i=0;
    i++;
    this.randomData=Math.random()*i;
  }

  chidVlues(data:any){
    this.childVlaue=data;
  }
}
