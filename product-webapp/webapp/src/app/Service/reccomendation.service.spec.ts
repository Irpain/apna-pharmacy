import { TestBed } from '@angular/core/testing';

import { ReccomendationService } from './reccomendation.service';

describe('ReccomendationService', () => {
  let service: ReccomendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReccomendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
