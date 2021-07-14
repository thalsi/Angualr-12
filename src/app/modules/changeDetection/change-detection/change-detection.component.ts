import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  fruits = ['Mengo', 'Orange', 'Banana'];
  value='valueTypeData';

  constructor() { }

  ngOnInit(): void {

  }

  Granpa(){
    console.log("0----->Granpa fast");
  }

  addFruit(item:string) {
    this.fruits.push(item);
    // this.fruits = [...this.fruits, item];//change dection avoid(here new refrences createing..)
  }  

  valueType(item:string){
    this.value=item;
  }

}
