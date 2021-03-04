import { TestBed } from '@angular/core/testing';

import { SecuritySessionService } from './security-session.service';

describe('SecuritySessionService', () => {
  let service: SecuritySessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritySessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
