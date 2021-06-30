import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {
  condtion:boolean=false;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.condtion=!this.condtion;
    },1000);
  }

}
