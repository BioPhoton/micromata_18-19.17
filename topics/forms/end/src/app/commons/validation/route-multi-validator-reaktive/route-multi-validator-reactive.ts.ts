import {FormGroup, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs/Observable";
export class RouteMultiValidatorReactive {

  static validationName = "routValidation";

  validate(fg: FormGroup): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.validateRouteWithPromise(fg);
  }

  validateRouteWithPromise(fg: FormGroup): Promise<ValidationErrors | null> {

    return new Promise((resolve) => {
      const route: any = {};
      if (fg.get('from')) {
        route.from = fg.get('from').value;
      }
      if (fg.get('to')) {
        route.from = fg.get('to').value;
      }

      const isValid = (route.from && route.to && route.from !== route.to);
      console.log('RouteMultiValidatorReactive validateRouteWithPromise', route);
      if (isValid) {
        resolve(null);
      } else {
        resolve({
          [RouteMultiValidatorReactive.validationName]: {
            actual: route
          }
        });
      }

    });
  }

}
