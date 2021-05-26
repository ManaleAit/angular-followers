import { TestBed } from '@angular/core/testing';

import { ServicePostsService } from './service-posts.service';

describe('ServicePostsService', () => {
  let service: ServicePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
