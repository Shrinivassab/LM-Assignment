import { Action } from '@ngrx/store';

export enum BikeSharingActionTypes {
  LoadBikeSharings = '[BikeSharing] Load BikeSharings',
  LoadBikeSharingsSuccess = '[BikeSharing] Load BikeSharings Success',
  LoadBikeSharingsError = '[BikeSharing] Load BikeSharings Error'
  
  
}

export class LoadBikeSharings implements Action {
  readonly type = BikeSharingActionTypes.LoadBikeSharings;
}


export type BikeSharingActions = LoadBikeSharings;
