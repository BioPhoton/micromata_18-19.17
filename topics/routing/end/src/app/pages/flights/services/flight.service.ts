import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Headers, Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { IFlight } from '../../../core/entities/IFlight';

@Injectable()
export class FlightService {

  private baseUrl: string;
  private resourceUrl = 'flight';

  constructor(private http: Http) {
    this.baseUrl = 'http://angular.at/api';
  }

  findById(id: string): Observable<IFlight> {

    const url = this.baseUrl + '/' + this.resourceUrl;

    let headers = new Headers();
    headers.set('Accept', 'text/json');

    let search = new URLSearchParams();
    search.set('id', id);

    return this
      .http
      .get(url, {headers, search})
      .map(resp => resp.json());

  }

  find(from: string, to: string): Observable<IFlight[]> {

    const url = this.baseUrl + '/' + this.resourceUrl;

    const headers = new Headers();
    headers.set('Accept', 'application/json');

    const search = new URLSearchParams();
    search.set('from', from);
    search.set('to', to);
    const reqParams: RequestOptionsArgs = {headers, search};

    return this
      .http
      .get(url, reqParams)
      .map((response) => {
        return (response) ? response.json() : [];
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

}
