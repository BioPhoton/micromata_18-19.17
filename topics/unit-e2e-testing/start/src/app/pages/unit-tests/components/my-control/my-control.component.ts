import {Component, forwardRef, Input, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";



@Component({
  selector: 'my-control',
  templateUrl: './my-control.component.html'
})
export class MyControlComponent implements OnInit {

  value: number;
  disabled = false;

  @Input()
  min: number;
  @Input()
  max: number;

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  constructor() {
  }

  ngOnInit() {
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

}
