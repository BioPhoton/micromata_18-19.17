import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  _userName: string;

  constructor() {
  }

  login() {
    this._userName = 'max'
  };

  logout() {
    this._userName = '';
  }

  get isLoggedIn(): boolean {
    return !!this._userName;
  }

  get userName() {
    return this._userName;
  }
}
