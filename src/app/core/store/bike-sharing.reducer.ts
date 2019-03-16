
import { BikeSharingActions, BikeSharingActionTypes } from './bike-sharing.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: BikeSharingActions): State {
  switch (action.type) {

    case BikeSharingActionTypes.LoadBikeSharings:
      return state;

    default:
      return state;
  }
}
