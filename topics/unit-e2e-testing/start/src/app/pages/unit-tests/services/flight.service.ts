import { Injectable } from '@angular/core';
import {Headers, Http, URLSearchParams} from "@angular/http";
import {Observable} from 'rxjs/Observable'

import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"

@Injectable()
export class FlightService {

  private baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = "http://angular.at/api";
  }

  findById(id: string): Observable<any> {
    const url: string = this.baseUrl + '/flight';

    const headers = new Headers()
    headers.set('Accept', 'application/json');

    const search = new URLSearchParams();
    search.set('id', id);

    return this.http
      .get(url, {headers, search})
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error));

  }


}
