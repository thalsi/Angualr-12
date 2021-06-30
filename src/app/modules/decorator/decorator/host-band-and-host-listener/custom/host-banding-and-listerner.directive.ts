import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBandingAndListerner]'
})
export class HostBandingAndListernerDirective {
  @HostBinding('style.color') color!:string;// class or proparty or attrubtee ('class.calssname', 'diable','attr.color')
  @HostBinding('style.border-color') borderColor!:string;
  @HostListener('keydown') newColor(){
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  constructor() { 
  }

}
