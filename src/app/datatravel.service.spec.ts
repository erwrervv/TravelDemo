import { TestBed } from '@angular/core/testing';

import { DatatravelService } from './datatravel.service';

describe('DatatravelService', () => {
  let service: DatatravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
