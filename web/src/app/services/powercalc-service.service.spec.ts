import { TestBed } from '@angular/core/testing';

import { PowercalcServiceService } from './powercalc-service.service';

describe('PowercalcServiceService', () => {
  let service: PowercalcServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowercalcServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
