import { TestBed, inject } from '@angular/core/testing';

import { FlightEditResolveService } from './flight-edit-resolve.service';

describe('FlightEditResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightEditResolveService]
    });
  });

  it('should be created', inject([FlightEditResolveService], (service: FlightEditResolveService) => {
    expect(service).toBeTruthy();
  }));
});
