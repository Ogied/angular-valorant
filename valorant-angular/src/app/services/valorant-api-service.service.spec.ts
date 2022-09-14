import { TestBed } from '@angular/core/testing';

import { ValorantApiServiceService } from './valorant-api-service.service';

describe('ValorantApiServiceService', () => {
  let service: ValorantApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValorantApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
