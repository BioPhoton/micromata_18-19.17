import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { IFlight } from '../../entities/IFlight';

@Injectable()
export class FlightService {

  private baseUrl: string;
  private resourceUrl = 'flight';

  constructor() {
  }

  find(from: string, to: string): Observable<IFlight[]> {

    const flights = [
      {
        'id': 6,
        'from': 'Wien',
        'to': 'Hamburg',
        'date': '2017-17-24T17:00:00.000+01:00'
      }
    ];
    return Observable.of(flights);

  }

  findById(id: string): Observable<IFlight> {
    const flight =
      {
        'id': 6,
        'from': 'Wien',
        'to': 'Hamburg',
        'date': '2017-17-24T17:00:00.000+01:00'
      };
    return Observable.of(flight);

  }


  save(flight: IFlight): Observable<IFlight> {
    return Observable.of(flight);
  }

}
