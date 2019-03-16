import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BikeSharingEffects } from './bike-sharing.effects';

describe('BikeSharingEffects', () => {
  let actions$: Observable<any>;
  let effects: BikeSharingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeSharingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BikeSharingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
