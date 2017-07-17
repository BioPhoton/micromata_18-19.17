import { TestBed, inject } from '@angular/core/testing';

import { FlightSelectionService } from './flight-selection.service';

describe('FlightSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightSelectionService]
    });
  });

  it('should be created', inject([FlightSelectionService], (service: FlightSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
