import { TestBed } from '@angular/core/testing';

import { AuthCancelService } from './auth-cancel.service';

describe('AuthCancelService', () => {
  let service: AuthCancelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCancelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
