import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServies } from '../../services/data.servies';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {
  data:number=0;
  emitData:any;
  constructor(private _DataServices:DataServies) { }

  ngOnInit(): void {
    // this.data= this._DataServices.count;
    setInterval(()=>{
      this.data= this._DataServices.count;
    },1000);
    // let emitData= this._DataServices.button.subscribe((res)=>{
    //   console.log(res);
    //   this.data= this._DataServices.count;
    // });
  }

  ngOnDestroy(){
    this.emitData.unsubscribe();
  }
}
