import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import {
  BikeSharingActions,
  BikeSharingActionTypes,
  LoadBikeSharing,
  LoadBikeSharingError,
  LoadBikeSharingSuccess
} from './bike-sharing.actions';
import { BikeSharingService } from '../http-services/bike-sharing.service';
import { BikeSharingResponse } from '../models/bike-sharing-response.model';

@Injectable({
  providedIn: 'root'
})
export class BikeSharingEffects {
  @Effect()
  getBikeSharingData$: Observable<Action> = this.actions$.pipe(
    ofType<LoadBikeSharing>(BikeSharingActionTypes.LoadBikeSharing),
    switchMap(() => this.service.getCityBikeData().pipe(
      map((response: BikeSharingResponse) => new LoadBikeSharingSuccess({bikeNetwork: response})),
      catchError(error => of(new LoadBikeSharingError({error})))
    ))
  );

  constructor(private actions$: Actions<BikeSharingActions>, private service: BikeSharingService) {
  }

}
