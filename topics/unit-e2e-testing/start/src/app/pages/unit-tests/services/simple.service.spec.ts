import { TestBed, inject } from '@angular/core/testing';

import { SimpleService } from './simple.service';

describe('SimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
  });

  it('should be created', inject([SimpleService], (service: SimpleService) => {
    expect(service).toBeTruthy();
  }));

  it('should divide correctly', inject([SimpleService], (service: SimpleService) => {

  }))

  it('should throw Error when divide by 0', inject([SimpleService], (service: SimpleService) => {

  }))

  it('should multiply async', inject([SimpleService], async (service: SimpleService) => {

  }))

});
