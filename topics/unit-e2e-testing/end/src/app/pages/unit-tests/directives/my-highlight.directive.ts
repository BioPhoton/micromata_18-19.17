import {
  Directive, ElementRef, HostBinding, HostListener,
  Input
} from '@angular/core'

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {

  @HostBinding('class')
  class = 'highlighted';

  @Input()
  @HostBinding('style.color')
  color = '#f00';

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('input', ['$event'])
  onInput($event) {
    const el = this.elementRef.nativeElement;
    this.class = (el.value.length)
  }

}
