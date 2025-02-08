import { TestBed } from '@angular/core/testing';

import { FinalCartService } from './final-cart.service';

describe('FinalCartService', () => {
  let service: FinalCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
