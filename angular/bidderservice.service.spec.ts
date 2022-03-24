import { TestBed } from '@angular/core/testing';

import { BidderserviceService } from './bidderservice.service';

describe('BidderserviceService', () => {
  let service: BidderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
