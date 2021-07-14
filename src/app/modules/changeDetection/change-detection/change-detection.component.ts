import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {
  data: string = '';
  constructor() { }

  ngOnInit(): void {
    // setInterval(()=>{

    // },1000);
  }

  calling(){
    console.log('0-->dom re-reader');
  }

  clickme(){
    this.data='this new data'
  }

}
