import {LOCATION} from '../Types';

export const initialState = {
  latitude: null,
  longitude: null,
  temperature: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATION: {
      return {
        ...state,
        latitude: action?.latitude,
        longitude: action?.longitude,
        temperature: action?.temperature,
      };
    }
    default:
      return state;
  }
};
