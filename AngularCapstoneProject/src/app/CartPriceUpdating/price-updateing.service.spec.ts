import { TestBed } from '@angular/core/testing';

import { PriceUpdateingService } from './price-updateing.service';

describe('PriceUpdateingService', () => {
  let service: PriceUpdateingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceUpdateingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
