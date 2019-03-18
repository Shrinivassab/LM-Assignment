import { Action } from '@ngrx/store';

import { BikeSharingResponse } from '../models/bike-sharing-response.model';

export enum BikeSharingActionTypes {
  LoadBikeSharing = '[BikeSharing] Load BikeSharing',
  LoadBikeSharingSuccess = '[BikeSharing] Load BikeSharing Success',
  LoadBikeSharingError = '[BikeSharing] Load BikeSharing Error'
}

export class LoadBikeSharing implements Action {
  readonly type = BikeSharingActionTypes.LoadBikeSharing;
}

export class LoadBikeSharingSuccess implements Action {
  readonly type = BikeSharingActionTypes.LoadBikeSharingSuccess;

  constructor(public payload: { bikeNetwork: BikeSharingResponse }) {}
}

export class LoadBikeSharingError implements Action {
  readonly type = BikeSharingActionTypes.LoadBikeSharingError;
  constructor(public payload: {error: any}) {}
}


export type BikeSharingActions = LoadBikeSharing | LoadBikeSharingSuccess | LoadBikeSharingError;
