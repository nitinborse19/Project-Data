import { TestBed } from '@angular/core/testing';

import { InsuranceCalculatorServiceService } from './insurance-calculator-service.service';

describe('InsuranceCalculatorServiceService', () => {
  let service: InsuranceCalculatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceCalculatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
