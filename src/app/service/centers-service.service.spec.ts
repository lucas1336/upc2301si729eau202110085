import { TestBed } from '@angular/core/testing';

import { CentersServiceService } from './centers-service.service';

describe('CentersServiceService', () => {
  let service: CentersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
