import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  @Input() item:any;
  color='SlateBlue';
  date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
