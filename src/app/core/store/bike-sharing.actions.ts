import { Action } from '@ngrx/store';

export enum BikeSharingActionTypes {
  LoadBikeSharings = '[BikeSharing] Load BikeSharings',
  
  
}

export class LoadBikeSharings implements Action {
  readonly type = BikeSharingActionTypes.LoadBikeSharings;
}


export type BikeSharingActions = LoadBikeSharings;
