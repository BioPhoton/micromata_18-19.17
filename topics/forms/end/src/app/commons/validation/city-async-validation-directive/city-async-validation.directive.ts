import {Directive, forwardRef} from "@angular/core";
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";


import {Observable} from "rxjs/Observable";

import "rxjs/Rx"
import "rxjs/add/operator/delay";
import "rxjs/add/operator/first";
import "rxjs/add/operator/distinctUntilChanged";

@Directive({
  selector: 'input[asyncCityValidation]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => CityAsyncValidationDirective), multi: true
    }
  ]
})
export class CityAsyncValidationDirective implements AsyncValidator {

  static allowedCitys = "Graz,Hamburg,Wien".split(',');
  static validationName = "asyncCityValidation";
  static asyncTime = 4000;

  validate(c: AbstractControl): any {
    return this.validateWithObservable(c);
  }

  constructor() {

  }

  validateWithPromise(c: AbstractControl): Promise<ValidationErrors> {
    console.log('CityAsyncValidationDirective validateWithPromise');
    return new Promise((resolve) => {
      setTimeout(() => {
        if (CityAsyncValidationDirective.allowedCitys.indexOf(c.value) !== -1) {
          resolve(null);
        } else {
          resolve({
            [CityAsyncValidationDirective.validationName]: {
              actual: c.value,
              allowed: CityAsyncValidationDirective.allowedCitys.join(',')
            }
          });
        }
      }, CityAsyncValidationDirective.asyncTime);
    });
  }

  validateWithObservable(c: AbstractControl): Observable<ValidationErrors> {
    console.log('CityAsyncValidationDirective validateWithObservable');
    const routValidation$ = new Observable(observer => {
      if (CityAsyncValidationDirective.allowedCitys.indexOf(c.value) !== -1) {
        observer.next({
          [CityAsyncValidationDirective.validationName]: {
            actual: c.value,
            allowed: CityAsyncValidationDirective.allowedCitys.join(',')
          }
        });
      } else {
        observer.next(null);
      }
    });

    return routValidation$.debounceTime(500).distinctUntilChanged().delay(CityAsyncValidationDirective.asyncTime).first();
  }

}
