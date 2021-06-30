import {  Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStructer]'
})
export class StructerDirective {
  @Input() set appStructer(value:boolean){
    if(value){
      this.eleRef.nativeElement.style.background = 'Violet';
    }else{
      this.eleRef.nativeElement.style.background = 'green';
    }
   
  }
  constructor(private eleRef:ElementRef) {
  }

}
