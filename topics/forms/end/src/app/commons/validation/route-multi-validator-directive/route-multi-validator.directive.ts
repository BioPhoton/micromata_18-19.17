import {Directive, forwardRef} from "@angular/core";
import {FormGroup, ValidationErrors, Validator, NG_VALIDATORS} from "@angular/forms";


const MY_ASYNC_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RouteMultiValidatorDirective),
  multi: true
};

@Directive({
  selector: '[routeMultiValidator]',
  providers: [
    MY_ASYNC_VALIDATOR
  ]
})
export class RouteMultiValidatorDirective implements Validator {

  static validationName = "routeValid";

  constructor() { }

  validate(fg: FormGroup): ValidationErrors | any {
    console.log('RouteMultiValidatorDirectiveDirective routeMultiValidator');

    const actualValues: any = {};

    console.log('fg', fg.value);

    if (fg.get('from')) {
      actualValues.from = fg.get('from').value;
    }

    if (fg.get('to')) {
      actualValues.to = fg.get('to').value;
    }

    const isValid = (actualValues.from && actualValues.to && actualValues.from !== actualValues.to);

    return isValid ? null : {
      [RouteMultiValidatorDirective.validationName]: {
        actual: actualValues
      }
    };
  }

}
