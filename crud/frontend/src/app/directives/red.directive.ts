import { Directive, ElementRef } from '@angular/core';

@Directive({
  //seletor
  selector: '[appRed]'
})
export class RedDirective {
  //diretiva
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
   }

}
