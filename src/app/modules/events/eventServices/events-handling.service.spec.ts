import { TestBed } from '@angular/core/testing';

import { EventsHandlingService } from './events-handling.service';

describe('EventsHandlingService', () => {
  let service: EventsHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
