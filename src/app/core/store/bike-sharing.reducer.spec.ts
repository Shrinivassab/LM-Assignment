import { bikeSharingReducer, initialState } from './bike-sharing.reducer';

describe('BikeSharing Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = bikeSharingReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
