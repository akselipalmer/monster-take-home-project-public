import { TestBed } from '@angular/core/testing';

import { SubmitFlightDetailsService } from './submit-flight-details.service';

describe('SubmitFlightDetailsService', () => {
  let service: SubmitFlightDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitFlightDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
