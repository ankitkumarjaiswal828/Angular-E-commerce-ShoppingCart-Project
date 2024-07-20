import { TestBed } from '@angular/core/testing';

import { ServicecartService } from './servicecart.service';

describe('ServicecartService', () => {
  let service: ServicecartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
