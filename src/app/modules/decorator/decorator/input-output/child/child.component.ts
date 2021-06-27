import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() random:any;
  @Input() ParentValue:any;
  @Output() childDatas= new EventEmitter();

  childData:any='child data';

  constructor() { }

  ngOnInit(): void {
  }

  pass(){
    this.childDatas.emit(this.childData);
  }

}
