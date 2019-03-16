import { TestBed } from '@angular/core/testing';

import { BikeSharingService } from './bike-sharing.service';

describe('BikeSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeSharingService = TestBed.get(BikeSharingService);
    expect(service).toBeTruthy();
  });
});
