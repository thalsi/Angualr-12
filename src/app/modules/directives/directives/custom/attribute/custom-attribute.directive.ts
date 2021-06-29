import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective {

  constructor(private emlRef:ElementRef) { 
    emlRef.nativeElement.style.background = 'slateblue';
  }
}
