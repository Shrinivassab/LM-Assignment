import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { BikeSharingActionTypes, BikeSharingActions } from './bike-sharing.actions';


@Injectable()
export class BikeSharingEffects {


  @Effect()
  loadBikeSharings$ = this.actions$.pipe(
    ofType(BikeSharingActionTypes.LoadBikeSharings),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<BikeSharingActions>) {}

}
