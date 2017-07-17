import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing'
import {
  HttpModule, Response, RequestMethod, ResponseOptions,
  XHRBackend
} from '@angular/http'
import {MockBackend, MockConnection} from '@angular/http/testing'

import 'rxjs/add/observable/of'
import {Observable} from 'rxjs/Observable'

import {FlightService} from './flight.service'

describe('AdvancedFlightService', () => {

  let backend: MockBackend;
  let flightService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        FlightService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });


    backend = TestBed.get(XHRBackend);
    flightService = TestBed.get(FlightService);
  });

  it('should be created', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));

  it('should get search results', fakeAsync(
    inject([FlightService], (service: FlightService) => {

      const expectedUrl = 'http://angular.at/api/flight?id=3';
      const expectedMethod = RequestMethod.Get;
      const expectedResult =
        {
          "id": 3,
          "from": "Wien",
          "to": "Hamburg",
          "date": "2017-12-24T17:00:00.000+01:00"
        };

      backend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(expectedMethod);
          expect(connection.request.url).toBe(expectedUrl);

          connection.mockRespond(new Response(
            new ResponseOptions({ body: expectedResult })
          ));
        });

      service.findById('3')
        .subscribe(res => {
          expect(res).toEqual(expectedResult);
        });

    })
  ));


});
