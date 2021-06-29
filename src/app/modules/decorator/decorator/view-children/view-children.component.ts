import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildrenComponent } from './children/children.component';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit,AfterViewInit {
  // @ViewChild(ChildrenComponent) childern!:ChildrenComponent;
  @ViewChildren(ChildrenComponent) childern!:QueryList<ChildrenComponent>;

  list=[{id:1,name:'Muhaamed'},{id:2,name:'Amal'},{id:3,name:'Tomas'}];

  constructor() {
    // console.log(this.childern);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // console.log(this.childern);
    // console.log(this.childern.toArray());
    
    this.childern.toArray().forEach((e)=>{
      if(e.item.name=='Amal'){
        console.log('work');
        
       setTimeout(() => {
        e.color="Violet";
       }, 0);
      }
      
    });
  }
}
