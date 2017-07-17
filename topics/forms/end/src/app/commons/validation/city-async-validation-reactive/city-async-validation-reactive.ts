import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";

export class CityAsyncReactiveValidation {


  static validationName = "asyncCityValidation";

  static asyncCityValidation(c: AbstractControl): Promise<ValidationErrors> | Promise<ValidationErrors> {
    console.log('CityAsyncReactiveValidation asyncCityValidation');
    return new Promise((resolve) => {
      setTimeout(() => {
        const allowedCitys: string[] = "Wien,Graz,Hamburg,Zürich".split(',');

        const isValid = allowedCitys.indexOf(c.value) !== -1;

        console.log(c.value, allowedCitys);
        if (isValid) {
          resolve(null);
        } else {
          resolve({
            [CityAsyncReactiveValidation.validationName]: {
              actual: c.value,
              allowed: allowedCitys,
            }
          });
        }
      }, 3000);
    });
  }

  static asyncCityValidationWithParam(params: string[]): AsyncValidatorFn {

    return validateFn;

    ////////

    function validateFn(c: AbstractControl): Promise<ValidationErrors> | Promise<ValidationErrors> {
      console.log('CityAsyncReactiveValidation asyncCityValidationWithParams', params);
      return new Promise((resolve) => {
        setTimeout(() => {
          const allowedCitys: string[] = params;
          const isValid = allowedCitys.indexOf(c.value) !== -1;

          if (isValid) {
            resolve(null);
          } else {
            resolve({
              [CityAsyncReactiveValidation.validationName]: {
                actual: c.value,
                allowed: allowedCitys,
              }
            });
          }
        }, 4000);

      });

    }

  }

}
