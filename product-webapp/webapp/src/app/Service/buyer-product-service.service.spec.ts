import { TestBed } from '@angular/core/testing';

import { BuyerProductServiceService } from './buyer-product-service.service';

describe('BuyerProductServiceService', () => {
  let service: BuyerProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
