import { TestBed } from '@angular/core/testing';

import { GuardianUserGuard } from './guardian-user.guard';

describe('GuardianUserGuard', () => {
  let guard: GuardianUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardianUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
