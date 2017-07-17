import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CityReactiveValidation {

  static validationName = "cityValidation";

  static validateCity(c: AbstractControl): ValidationErrors | any {
    console.log('CityReactiveValidation validateCity');
    const allowedCitys = 'Wien,Graz,Hamburg,Zürich'.split(',');

    const isValid = allowedCitys.indexOf(c.value) !== -1;

    return isValid ? undefined : {
      [CityReactiveValidation.validationName]: {
        actual: c.value,
        allowed: allowedCitys.join(',')
      }
    };
  }

  static validateCityWithParams(allowedCitys: string[]): ValidatorFn {

    return (c: AbstractControl): ValidationErrors | any => {
      console.log('CityReactiveValidation validateCityWithParams', allowedCitys);
      const isValid = allowedCitys.indexOf(c.value) !== -1;

      return isValid ? undefined : {
        [CityReactiveValidation.validationName]: {
          actual: c.value,
          allowed: allowedCitys.join(',')
        }
      };
    };

  }

}
