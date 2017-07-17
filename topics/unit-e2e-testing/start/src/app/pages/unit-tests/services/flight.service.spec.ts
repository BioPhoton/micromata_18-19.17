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
      imports: [],
      providers: [
        FlightService,
      ]
    });

    flightService = TestBed.get(FlightService);
  });

  it('should be created', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));

  it('should get search results', fakeAsync(
    inject([FlightService], (service: FlightService) => { })
  ));


});
