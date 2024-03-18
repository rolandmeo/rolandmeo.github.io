import { TestBed } from '@angular/core/testing';

import { PlatestackingService } from './platestacking.service';

describe('PlatestackingService', () => {
  let service: PlatestackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatestackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
