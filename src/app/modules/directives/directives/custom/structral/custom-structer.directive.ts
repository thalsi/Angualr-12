import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructer]'
})
export class CustomStructerDirective {
  @Input()  set appCustomStructer(value:boolean){
    if(value){
      this.elemetRef.nativeElement.style.background = 'Violet';
    }else{
      this.elemetRef.nativeElement.style.background = 'Orange';
    }
  }
  constructor(private elemetRef:ElementRef) { }

}
