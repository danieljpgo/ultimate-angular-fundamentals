import { TestBed } from '@angular/core/testing';

import { DashboardUsersService } from './dashboard-users.service';

describe('DashboardUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardUsersService = TestBed.get(DashboardUsersService);
    expect(service).toBeTruthy();
  });
});
