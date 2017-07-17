import {Component, forwardRef, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";


const My_VALUE_ASCCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyControlComponent),
  multi: true
};

@Component({
  selector: 'my-control',
  templateUrl: './my-control.component.html',
  styleUrls: ['./my-control.component.scss'],
  providers: [
    My_VALUE_ASCCESSOR
  ]
})
export class MyControlComponent implements OnInit, ControlValueAccessor {

  value: number;
  disabled = false;

  onTouch: Function;
  onModelChange: Function;

  focus = false;

  onFocus($event) {
    console.log('FOCUS');
    this.focus = true;
    this.onTouch();
  }

  onBlur() {
    console.log('BLUR');
    this.focus = false;
    this.onTouch();
  }

  onKeyDown($event: KeyboardEvent) {

    const keyActions: { [key: string]: Function } = {
      'ArrowUp': () => this.increment(),
      'ArrowRight': () => this.increment(),
      'ArrowDown': () => this.decrement(),
      'ArrowLeft': () => this.decrement()
    };

    console.log('$event: ', $event);
    if ($event.key in keyActions) {
      keyActions[$event.key]();
    }

  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }


  // writes value to model
  writeValue(value: number): void {
    this.value = value;
  }

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
    this.onModelChange(this.value);
  }

  decrement() {
    this.value = (this.value <= 1) ? 1 : this.value - 1;
    this.onModelChange(this.value);
  }

}
