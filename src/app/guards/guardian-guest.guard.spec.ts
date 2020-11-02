import { TestBed } from '@angular/core/testing';

import { GuardianGuestGuard } from './guardian-guest.guard';

describe('GuardianGuestGuard', () => {
  let guard: GuardianGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
