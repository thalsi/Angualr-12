import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  @Input() data:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  default(){
    console.log('1-->default....');
  }

}
