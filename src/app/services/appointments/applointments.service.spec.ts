import { TestBed } from '@angular/core/testing';

import { ApplointmentsService } from './applointments.service';

describe('ApplointmentsService', () => {
  let service: ApplointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
