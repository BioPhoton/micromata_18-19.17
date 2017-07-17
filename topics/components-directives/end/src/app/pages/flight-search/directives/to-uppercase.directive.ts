import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[toUppercase]'
})
export class ToUppercaseDirective {

  className = 'form-control';

  @HostBinding('class')
  class: string = this.className;

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('input', ['$event'])
  onInput($event) {
    const el = this.elementRef.nativeElement;
    el.value = $event.target.value.toUpperCase();
    this.class = (el.value && el.value.length < 3) ? this.className + ' form-control-warning' : this.className;
  }


}
