import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  @ViewChild(ViewChildComponent) child!:ViewChildComponent;
  constructor() { }

  ngOnInit(): void {
    
  }

  Ingreement(){
    this.child.ingrement();
  }

  Dicrement(){
    this.child.degremnt();
  }

}
