import { Component, OnInit } from '@angular/core';
import { EmitService } from '../servers/emit.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  value=false;
  constructor(private emitService:EmitService) { }

  ngOnInit(): void {
    this.emitService.getdata().subscribe((res:any)=>{
      
    });
  }

  me(){
    this.value=!this.value;
    this.emitService.activeMe(this.value);
  }

}
