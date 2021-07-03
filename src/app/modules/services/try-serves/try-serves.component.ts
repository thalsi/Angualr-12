import { Component, OnInit } from '@angular/core';
import { DataServies } from '../services/data.servies';

@Component({
  selector: 'app-try-serves',
  templateUrl: './try-serves.component.html',
  styleUrls: ['./try-serves.component.css'],
  providers:[DataServies]
})
export class TryServesComponent implements OnInit {
  componentData:number=0;
  data:number=0;
  constructor(private _DataServies:DataServies) { }

  ngOnInit(): void {
    this.data=this._DataServies.count;
  }

  click(){
    this.componentData++;
    this._DataServies.countData();
    this._DataServies.button.emit();
    this.data=this._DataServies.count;
  }

}
