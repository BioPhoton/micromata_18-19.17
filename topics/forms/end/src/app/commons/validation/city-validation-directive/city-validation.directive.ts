import {Directive, forwardRef, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

const VALIDATOR_PROVIDER = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CityValidationDirective),
  multi: true
}

@Directive({
  selector: 'input[cityValidation]',
  providers: [VALIDATOR_PROVIDER]
})
export class CityValidationDirective implements Validator {

  static defaultAallowedCitys = "Graz,Hamburg,Zürich,Wien".split(',');
  static validationName = "cityValidation";


  @Input()
  cityValidation: string[];

  constructor() {
    console.log('Constr CITY VAL');
  }

  validate(c: AbstractControl): ValidationErrors | any {
    console.log('CityValidationDirective cityValidation');
    return this.cityValidationFn(c);
  }

  cityValidationFn(c: AbstractControl): ValidationErrors | any {

    const allowedCitys = this.cityValidation || CityValidationDirective.defaultAallowedCitys;
    const isValid = allowedCitys.indexOf(c.value) !== -1;

    return isValid ? undefined : {
      [CityValidationDirective.validationName]: {
        actual: c.value,
        allowed: allowedCitys.join(',')
      }
    };
  }


}
