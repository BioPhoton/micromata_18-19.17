import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of"

@Injectable()
export class SelectivePreloadingStrategyService implements PreloadingStrategy {

  constructor() {
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data
      && route.data.preload
      && route.data.preload === true) {
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return Observable.of(null);
    }
  }

}
