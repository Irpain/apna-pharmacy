import { TestBed } from '@angular/core/testing';

import { LoginAdvancedService } from './login-advanced.service';

describe('LoginAdvancedService', () => {
  let service: LoginAdvancedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdvancedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
