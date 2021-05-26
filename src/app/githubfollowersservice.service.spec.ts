import { TestBed } from '@angular/core/testing';

import { GithubfollowersserviceService } from './githubfollowersservice.service';

describe('GithubfollowersserviceService', () => {
  let service: GithubfollowersserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubfollowersserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
