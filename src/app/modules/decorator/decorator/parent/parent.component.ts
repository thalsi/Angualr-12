import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  randomData:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    let i=0;
    i++;
    this.randomData=Math.random()*i;
  }

}
