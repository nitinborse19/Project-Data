import { TestBed } from '@angular/core/testing';

import { SellcropsserviceService } from './sellcropsservice.service';

describe('SellcropsserviceService', () => {
  let service: SellcropsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellcropsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
