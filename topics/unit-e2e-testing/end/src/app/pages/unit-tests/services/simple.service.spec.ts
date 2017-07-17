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
    expect(service.divide(5,2)).toBe(2.5);
  }))

  it('should throw Error when divide by 0', inject([SimpleService], (service: SimpleService) => {
    expect(function(){service.divide(5,0)}).toThrowError('Infinity Error');
  }))

  it('should multiply async', inject([SimpleService], async (service: SimpleService) => {
    let result = null;

    await service.multiply(21,2)
      .then((r) => {
      result = r;
    });

    expect(result).toBe(42)
  }))

});
