import { ChangeDetectorRef, NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {
  data = ['a', 'b', 'c', 'd'];
  counter = 0;
  time=1000;
  v=true;

  constructor(private _ref: ChangeDetectorRef) {}

  get displayText() {
    console.log('re-rendered');
    return this.data.join(', ');
  }

  ngOnInit() {
    // const setInterval = window['__zone_symbol__setInterval'];
    if(this.v){
      setInterval(() => {
        if (Math.random() < 0.1) {
          console.log('Should trigger a change detection..!'); 
          this.counter++;
          this.v=false;
          this._ref.detectChanges();
        }
        else {
          if(this.v){

            console.log('not trigger a change detection');
          }
        }
      }, this.time);
    }
    }

}
