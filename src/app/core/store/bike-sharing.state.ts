import { BikeSharingResponse } from '../models/bike-sharing-response.model';

export interface BikeSharingState {
  bikeData: BikeSharingResponse;
  error: any;
}
