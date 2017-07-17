import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivate');
    return this.handleLoginCheck();
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canActivateChild');
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad');
    return this.handleLoginCheck();
  }

  handleLoginCheck(): Observable<boolean> | Promise<boolean> | boolean {
    let isAllowed = false;

    if (this.authService.isLoggedIn) {
      isAllowed = true;
    }

    if (!isAllowed) {
      this.router.navigate(['home', {loginNeeded: true}])
    }

    console.log('handleLoginCheck: ', isAllowed);
    return Observable.of(isAllowed);
  }


}
