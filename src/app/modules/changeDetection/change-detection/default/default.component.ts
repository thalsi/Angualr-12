import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class DefaultComponent implements OnInit {

  @Input() data!: string[];
  @Input() value!:string;
  
  constructor() { }

  ngOnInit(): void {
  }

  defult(){
    console.log("1------>defult");
    
  }
}
