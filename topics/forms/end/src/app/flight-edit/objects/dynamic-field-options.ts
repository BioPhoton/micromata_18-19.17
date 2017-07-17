import {ValidateFn} from "codelyzer/walkerFactory/walkerFn";
import {AsyncValidatorFn} from "@angular/forms";
export interface IFormElement {
  controlType?: string;
  type: string;
  label?: string;
  name: string;
  validators?: any | any[];
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[];
}
