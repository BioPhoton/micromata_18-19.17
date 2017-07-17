import { Injectable } from '@angular/core';
import { IFlight } from '../entities/IFlight';

@Injectable()
export class FlightService {

  constructor() { }

  find(from, to): IFlight[] {
    const flights: IFlight[] = [
      {
        "id": 1,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-12-24T17:00:00.000+01:00"
      },
      {
        "id": 2,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-13-24T17:00:00.000+01:00"
      },
      {
        "id": 3,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-14-24T17:00:00.000+01:00"
      },
      {
        "id": 4,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-15-24T17:00:00.000+01:00"
      },
      {
        "id": 5,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-16-24T17:00:00.000+01:00"
      },
      {
        "id": 6,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-17-24T17:00:00.000+01:00"
      },
      {
        "id": 7,
        "from": "Wien",
        "to": "Hamburg",
        "date": "2017-18-24T17:00:00.000+01:00"
      }
    ];

    if(from || to) {
      return flights.splice(0,4);
    }
    return flights;
  }

}
