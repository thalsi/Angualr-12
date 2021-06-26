import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  list=['ali', 'ajumal','aji','shilpa'];
  expression:boolean=false;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{this.expression=!this.expression},1000);
  }

}
