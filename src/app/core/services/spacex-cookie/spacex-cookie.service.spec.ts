import { TestBed } from '@angular/core/testing';

import { SpacexCookieService } from './spacex-cookie.service';

describe('SpacexCookieService', () => {
  let service: SpacexCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
