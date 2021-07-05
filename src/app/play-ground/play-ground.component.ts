import { ChangeDetectorRef, NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {

  selectedCar: number=1;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  constructor() {}

  ngOnInit() {
  }
  
}
