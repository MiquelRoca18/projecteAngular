import { TestBed } from '@angular/core/testing';

import { PagiantonService } from './pagianton.service';

describe('PagiantonService', () => {
  let service: PagiantonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagiantonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
