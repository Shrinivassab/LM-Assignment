import { BikeSharingActions, BikeSharingActionTypes } from './bike-sharing.actions';
import { BikeSharingState } from './bike-sharing.state';

export const initialBikeSharingState: BikeSharingState = {
  bikeData: null,
  error: null
};

export function bikeSharingReducer(state: BikeSharingState = initialBikeSharingState, action: BikeSharingActions): BikeSharingState {
  switch (action.type) {

    case BikeSharingActionTypes.LoadBikeSharing:
      return {
        ...state,
        bikeData: null,
        error: null,
      };

    case BikeSharingActionTypes.LoadBikeSharingSuccess:
      const bikeDataResponse = action.payload.bikeNetwork;
      return {
        ...state,
        bikeData: bikeDataResponse,
        error: false
      };

    case BikeSharingActionTypes.LoadBikeSharingError:
      const {error} = action.payload;
      return {
        ...state,
        error
      };

    default:
      return state;
  }
}

